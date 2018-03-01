require('dotenv').config();

const md5 = require('md5');
const uuidv4 = require('uuid/v4');

const express = require('express');
const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');
// const ObjectId = require('mongodb').ObjectID;

const app = express();


/* Conectamos con el servidor */
MongoClient.connect('mongodb://localhost:27017/', (err, connection) => {
	if(err) {
		throw err;
	}
	const db = connection.db('user-register'); /* base de datos */

	app.set('view engine', 'pug');
	app.use(express.static('public'));


	app.get('/', (req, res) => {
		db.collection('users').find().toArray((err, data) => {
			if(err) {
				throw err;
			}
			res.render('index', {userList:data} );
		})
	});


	const formBodyParser = bodyParser.urlencoded({ extended: false });
	app.post('/register', formBodyParser, (req, res) => {
		const { name , surname, email, username, password } = req.body;

		// Inserto en mi base de datos un nuevo usuario:
		db.collection('users').insert({ id: uuidv4(), name: name, surname: surname, email: email, username: username, password: md5(password)})
			.then(res.redirect('/'))
			.catch(error => console.log(error));
	});


	app.use(function(req, res){
		res.status(404);
		res.json({ "error": "404", "message": "URL not found" });
	});

	const port = process.env.PORT;
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

