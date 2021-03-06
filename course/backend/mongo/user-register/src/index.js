require('dotenv').config();

const md5 = require('md5');
const uuidv4 = require('uuid/v4');

const express = require('express');
const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');
// const ObjectId = require('mongodb').ObjectID;

const app = express();

const mongo_host = process.env.MONGO_HOST;
const mongo_port = process.env.MONGO_PORT;
const mongo_db = process.env.MONGO_DB;
const mongo_collection = process.env.MONGO_COLLECTION;


/**
 * Check if password have numbers, minus chars, mayús chars and at least a length of 8
 * 
 * @param  {String} password
 * @return {Boolean} return true if is a valid password
 */
function checkValidPassword(password){
	return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(password);
}

/**
 * Remove all spaces from string
 *
 * @example
 * // returns "abc"
 * cleanSpacesFromString("  a  b  c  ");
 * 
 * @param  {String} str
 * @return {String} Return str without spaces
 */
function cleanSpacesFromString(str){
	return str.replace(/\s/g, '').trim();
}


function checkIfEmailAlreadyExist(db, emailToCheck){
	return db.collection(mongo_collection).findOne({email: emailToCheck}).then(function(result){
		return result !== null;
	});
}


/* Conectamos con el servidor */
MongoClient.connect(`mongodb://${mongo_host}:${mongo_port}/`, (err, connection) => {
	if(err) {
		throw err;
	}
	const db = connection.db(mongo_db); /* base de datos */

	app.set('view engine', 'pug'); /* Especificamos que vamos a usar Pug */

	app.use(express.static('public'));

	/* Lo siguiente no se debería hacer, ya que si hubiera múltiples usuarios conectados podría existir un cruce de datos (aunque es improbable debido a los hilos de ejecución). Lo correcto es pasar la información hasheada por URL y que el método get('/') la recoja y construya la salida adecuada. */
	/* Para ver un ejemplo mejor construido => "users-app-server-0" */
	let idOfDocument = "";
	let errorsInForm = false;
	let errorFormList = [];

	app.get('/', (req, res) => {
		// Listar los documentos de una determinada colección
		db.collection(mongo_collection).find().sort({ dateRegister: -1}).toArray((err, data) => {
			if(err) {
				throw err;
			}
			res.render('index', {userList:data, idOfDocument, errorsInForm, errorFormList} );
		});
	});


	app.get('/delete/:id?', (req, res) => {
		const idOfUser = req.params.id;

		// Elimino un documento
		db.collection(mongo_collection).remove({id: idOfUser})
			.then(res.redirect('/'))
			.catch(error => {
				console.log(error);
				res.redirect('/');
			});
	});


	app.get('/edit/:id?', (req, res) => {
		const idOfUser = req.params.id;

		if(idOfUser){
			idOfDocument = idOfUser;
		}

		res.redirect('/');
	});


	app.get('/cancel', (req, res) => {
		// El usuario quiere cancelar la operación
		idOfDocument = "";
		res.redirect('/');
	});


	// Registrar nuevos documentos
	const formBodyParser = bodyParser.urlencoded({ extended: false });
	app.post('/register', formBodyParser, (req, res) => {
		const { name, surname, email, username, password } = req.body;

		// Validaciones
		errorsInForm = false;
		errorFormList = [];

		let usernameValidated = cleanSpacesFromString(username);

		if(!checkValidPassword(password)){
			errorsInForm = true;
			errorFormList.push({errorText: "Password must contain numbers, minus chars, mayus chars and min length of 8 chars."});
		}

		checkIfEmailAlreadyExist(db, email)
			.then( alreadyExist => {
				if(alreadyExist){
					errorsInForm = true;
					errorFormList.push({errorText: "It's not a valid email"});
				}

				if(errorsInForm){
					// hay errores en el formulario
					return res.redirect('/'); /* Este 'return' evita que se siga ejecutando código */
				}else{
					// Inserto en mi base de datos un nuevo documento:
					let newIdentifier = uuidv4();
					let newTimestamp = new Date().getTime().toString();

					db.collection(mongo_collection).insert({ id: newIdentifier, name: name, surname: surname, email: email, username: usernameValidated, password: md5(password), dateRegister: newTimestamp})
						.then( res.redirect('/') )
						.catch(error => console.log(error));
				}

			})
			.catch(error => console.log(error));
	});

	app.post('/update', formBodyParser, (req, res) => {
		const identifier = req.body.identifier;
		const newName = req.body.name;
		const newSurname = req.body.surname;
		const newEmail = req.body.email;
		const newUsername = req.body.username;
		const newPassword = req.body.password;
		const passwordProvided = req.body.password_provided;

		// Si el usuario no ha establecido el password correcto no le dejo actualizar los datos. Voy a comprobarlo:

		// Recuperar un documento
		db.collection(mongo_collection).findOne({id: identifier})
			.then(data =>{
				if(md5(passwordProvided) !== data.password){
					// Han introducido el password incorrecto
					idOfDocument = "";
					return res.redirect('/');
				}else{
					// El password es válido, por lo que le dejo modificar los datos:
					
					// Compruebo si quiere actualizar el password o dejar el anterior
					const passwordToSet = (newPassword !== "") ? newPassword: passwordProvided;

					// Actualizo un documento
					db.collection(mongo_collection).updateOne({id: identifier}, { $set: {name: newName, surname: newSurname, email: newEmail, username: newUsername, password: md5(passwordToSet)} })
						.then(() => {
							idOfDocument = "";
							return res.redirect('/');
							})
						.catch(error => {
							console.log(error);
							return res.redirect('/');
						});

				}
			})
			.catch(error => {
				console.log(error);
				return res.redirect('/');
			});
	});


	app.use(function(req, res){
		res.status(404);
		res.json({ "error": "404", "message": "URL not found" });
	});

	const port = process.env.PORT || 8080;
	app.listen(port, () => console.log(`Task API running on port: ${port}`) );


	process.on('SIGINT', () =>{
		/* Detectamos el cierre del proceso de Node */
		console.log('\nStopping server...');

		/* Cerramos la conexión a la base de datos para evitar que se quede abierta */
		connection.close();

		/* Finalizamos las instrucciones que queremos ejecutar al detectar el cierre del proceso de Node */
		process.exit();
	});
});

