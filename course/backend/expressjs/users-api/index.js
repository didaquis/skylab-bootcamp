/**
 * En este ejemplo creamos usuarios (que guardamos en memoria ya que aún no tenemos base de datos).
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

const urlBodyParser = bodyParser.urlencoded({extended:false})
app.post('/api/users', urlBodyParser, (req, res) => {

	const usernameProvided = req.body.username;
	const passwordProvided = req.body.password;

	if(usernameProvided && passwordProvided){
		// creo un nuevo usuario y lo guardo.
		let userRegistration = new User(usernameProvided, passwordProvided);
		usersData.push(userRegistration);
		result = { "status": "OK", "message": "User registred Successfully" };
		res.json(result)
	}else{
		//res.send(`${req.body.username}:${req.body.password}`);
		result = { "status": "KO", "message": "User register failed", "error": "No handled errors yet"};
		res.json(result);	
	}
});

app.get('/api/users', (req, res) => {
	let result = usersData;
	res.json(result);
});

require('dotenv').config();
const port = process.env.PORT;
app.listen(port, () => console.log(`landing server running on port: ${port}`));
