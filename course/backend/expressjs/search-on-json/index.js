const express = require('express');
const app = express();

const _ = require('lodash');

const staffData = require('./staff.json');
/**
 * La linea anterior también podría ser así:
 * 
 * const fs = require('fs');
 * const staffData = JSON.parse(fs.readFileSync('./staff.json', 'utf-8'));
 */


app.get('/api/staff', (req, res) => {

	const query = req.query.q || req.query.query;

	if(query){
		// Si me llega una clave GET válida...

		let results = staffData.filter( (person) => person.name.includes(query) || person.surname.includes(query) || person.email.includes(query) )

		res.json(results); /* Fíjate que las respuestas se las envío en json */
	}else{
		// Si no me llega una clave válido o es igual a '' (string vacío), le envío la totalidad de resultados
		res.json(staffData)
	}
});

app.get('/api/staff/shuffle', (req, res) => res.json(_.shuffle(staff)))


require('dotenv').config(); /* Cargo las variables de entorno de mi fichero '.env' */
const port = process.env.PORT; /* Obtenemos el puerto de una variable de entorno */

app.listen(port, () => console.log(`Server running on port: ${port}`));

/* 
Abrir el server así: node index.js
Hacer una petición de tipo 'get' así: localhost:4501/api/staff?q=di

Te retornará este JSON:

[
    {
        "name": "Dídac",
        "surname": "García",
        "email": "didaquis@gmail.com"
    }
]

*/