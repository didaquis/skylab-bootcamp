/*
	## CLIENTE HTTP (Ejercicio 7 de 13) https://github.com/workshopper/learnyounode

Escribe un programa que reciba como argumento una URL y realice una
petición HTTP GET a la misma. Luego, deberá imprimir por consola el
contenido de cada evento "data" de la petición, uno por línea.

*/

/* Importamos un módulo */
const http = require('http');

let url = process.argv[2]

http.get(url, (res) => {

  	res.setEncoding("utf8");

  	res.on("error", console.error)

  	res.on("data", (data) => {
		console.log(data)
  	})
  
  	res.on("end", () => {
  		console.log('ending...')
  	})

});

/* Para ejecutarlo, pon esto en el terminal: "node clientehttp.js http://nodejs.org/api/index.html"  */