/*
	## CLIENTE HTTP (Ejercicio 8 de 13) https://github.com/workshopper/learnyounode
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
