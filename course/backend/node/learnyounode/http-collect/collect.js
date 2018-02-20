/*
	## CLIENTE HTTP (Ejercicio 8 de 13) https://github.com/workshopper/learnyounode

Escribe un programa que realice una petición HTTP GET a una URL provista
como primer argumento del programa. Almacena todos los datos recibidos del
servidor, es decir no sólo el primer evento "data", y luego escribe a
consola dos líneas:

» En la primera escribe la cantidad de caracteres recibidos.
» En la segunda escribe la totalidad de caracteres recibidos (todo el string).

*/

/* Importamos un módulo */
const http = require('http');

let url = process.argv[2]

http.get(url, (res) => {

	let body = '';
	let chars = 0;

	res.setEncoding("utf8");

	res.on("error", console.error)

	res.on("data", (chunk) => {
	body += chunk
	chars += chunk.length
	})

	res.on("end", () => {
		console.log(chars)
		console.log(body)
	})
});

/* Para ejecutarlo, pon esto en el terminal: "node collect.js http://www.ibmbigdatahub.com/tag/1008"  */
