const express = require('express');
const app = express();

const moment = require('moment'); /* Importamos la librería moment */
const bodyParser = require('body-parser'); /* Importamos la librería 'body-parser' (es un middleware) */


app.get('/', (req, res) => res.send('Hello World! (get)\n'))

app.post('/', (req, res) => res.send('Hello World! (post)\n'))

app.get('/api/parsetime', (req, res) => {

	//const date = new Date(req.query.iso); /* Obtenemos la fecha que nos llega por URL */
	const date = moment.utc(req.query.iso); /* Obtenemos la fecha que nos llega por URL, esta vez usamos la librería 'Moment' */

	/* Generamos los datos que responderá el servidor */
	const data = {
		hour: date.hours(),
		minute: date.minutes(),
		second: date.seconds()
	};

	res.json(data); /* Enviamos la respuesta (las cabeceras y el charset ya lo gestiona express) */
});


/* Vamos a usar la librería 'body-parser' */
const textBodyParser = bodyParser.text()
app.post('/helloworld', textBodyParser, (req, res) => {
	res.send(req.body); /* Le retornamos al cliente lo mismo que nos ha escrito */
});


/* Vamos a usar la librería 'body-parser' pero esta vez trabajamos en json */
const jsonBodyParser = bodyParser.json()
app.post('/helloworld/json', jsonBodyParser, (req, res) => {
	res.send(req.body);
});


/* Vamos a usar la librería 'body-parser' pero esta vez trabajamos con formularios */
const urlBodyParser = bodyParser.urlencoded({extended:false})
app.post('/login', urlBodyParser, (req, res) => {
	res.send(`${req.body.username}:${req.body.password}`);
});


const port = process.argv[2]
app.listen(port, () => console.log(`landing server running on port: ${port}`))


/* 
Para ver como funcionar:
Abre el servidor usando el terminal: node index.js 7898
Ahora haz una petición, por ejemplo usando una aplicación como 'Postan'. Haz una petición de tipo "get" a esta url: localhost:7898

Otra manera de conectar es abriendo otro terminal y ejecutando: curl localhost:7898

También prueba: 
En otro terminal ejecuta: curl 'localhost:7898/api/parsetime?iso=2018-02-22T12:10:15.474Z'
O bien en 'Postman' haz petición por 'get' así: localhost:7898/api/parsetime?iso=2018-02-22T11:50:15.474Z
*/
