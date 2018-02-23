/**
 * En este ejemplo creamos y listamos usuarios (que guardamos en memoria ya que aún no tenemos base de datos).
 * Generemos un servidor que permite registrarse, pero también listar los usuarios.
 */

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

let usersData = [];

class User{
	constructor(username, password){
		this.username = username;
		this.password = password;
	}
}


app.get('/api/users', (req, res) => {
	// Por GET mostramos todos los usuarios
	let result = usersData.map( ({username}) => {
		// Hacemos este destructuring nivel ninja para no mostrar los passwords en los resultados
		return {username};
	});
	res.json( success('Users listing succeeded.', result) );
});


app.get('/api/users/:username', (req, res) => {
	// Por GET buscamos un usuario en concreto
	const { params: { username:usernameProvided } } = req; /* Destructuring nivel ninja */

	let user;
	for (let i = 0; i < usersData.length; i++) {
        const _user = usersData[i]

        if (_user.username === usernameProvided) {
            user = _user;
            break;
        }
    }

    if (user) {
        res.json(success('User retrieval succeeded.', { username: user.username }))
    } else {
        res.json(failed('User retrieval failed.', 'Username does not exist.'))
    }

});


/* Si vamos a recibir info por 'json' usaremos 'bodyParser.json()' pero si la info llega por formulario trabajaríamos con 'bodyParser.urlencoded({extended:false})' */
// En este caso, trabajamos con JSON.
const jsonBodyParser = bodyParser.json();
app.use(jsonBodyParser); /* Gracias a esta instrucción, todas las llamadas a 'app' usarán a partir de ahora 'jsonBodyParser'. */

app.post('/api/users', (req, res) => {
	// Por POST creamos nuevos usuarios
	const { username, password } = req.body;

    if (!username || !password) return res.json(failed('User registration failed.', 'Invalid username and/or password.'));

    const alreadyExists = usersData.some(user => user.username === username);

    if (alreadyExists) return res.json(failed('User registration failed.', 'Username already exists.'));

    usersData.push({ username, password });

    res.json(success('User registration succeeded.'));
});



app.delete('/api/users/:username', (req, res) => {
	// Usamos DELETE para borrar usuarios
	const { params: { username } } = req;

    const { password } = req.body;

    if (!username || !password) return res.json(failed('User deletion failed.', 'Invalid username and/or password.'));

    /* Interesante ejemplo de uso de 'findIndex' */
    const index = usersData.findIndex(user => user.username === username);
    const user = usersData[index];

    if (!user) return res.json(failed('User deletion failed.', 'Username does not exists.'));

    if (user.password === password) {
        usersData.splice(index, 1);
        res.json(success('User deletion succeeded'));
    } else 
        res.json(failed('User deletion failed.', 'Wrong username and/or password.'));
});


app.put('/api/users/:username', (req, res) => {
	// Usamos UPDATE para actualizar el password de los usuarios
	const usernameProvided = req.params.username;
	const passwordProvided = req.body.password;
	const newpasswordProvided = req.body.newpassword;

	if(usernameProvided && passwordProvided && newpasswordProvided){
		const userPasswordChanged = usersData.some( (user) => {
			// busco el usuario y modifico su password
			if( (user.username === usernameProvided) && (user.password === passwordProvided) ){
				user.password = newpasswordProvided;
				return true;
			}
		});

		if(userPasswordChanged){
			res.json( success('Password changed.') )
		}else{
			res.json( failed('Password not changed.') );
		}
	}else{
		// no me llegan los datos necesarios
		return res.json(failed('User update failed.', 'Invalid username and/or password.'));
	}
});


function failed(message, error) {
	// Construimos un mensaje de error
	const res = { status: 'KO', message }; // destructuring!
	if (error){ 
		res.error = error;
	}
	return res;
}

function success(message, data) {
	const res = { status: 'OK', message };

	if (data){
		res.data = data;
	}

	return res;
}


require('dotenv').config();
const port = process.env.PORT;
app.listen(port, () => console.log(`landing server running on port: ${port}`));

/*
Para debugg, en el terminal (incorpora un breakpoint temporal al inicio): devtool index.js --watch --break


Para reproducir el ejemplo:
En un terminal ejecuta: node index.js 

Usa Postman para crear usuarios: Envía peticiones de tipo POST enviando como 'body' tipo 'raw' y con formato 'json' lo siguiente:
{
	"username": "pepe",
	"password": "1234"
}

Verás que puedes listar los usuarios, listar un único usuario, modificar el password y borrar el usuario.
Encontrarás un 'json' con algunas llamadas de ejemplo con Postman en el directorio 'test-with-postman'.
*/

