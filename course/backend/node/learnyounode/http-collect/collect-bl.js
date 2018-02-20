/*
	## CLIENTE HTTP (Ejercicio 8 de 13) https://github.com/workshopper/learnyounode
	Solución alternativa usando el módulo "bl"

Escribe un programa que realice una petición HTTP GET a una URL provista
como primer argumento del programa. Almacena todos los datos recibidos del
servidor, es decir no sólo el primer evento "data", y luego escribe a
consola dos líneas:

» En la primera escribe la cantidad de caracteres recibidos.
» En la segunda escribe la totalidad de caracteres recibidos (todo el string).

*/

/* Importamos un módulo */
const http = require('http');
const bl = require('bl')

let url = process.argv[2]

http.get(url, (res) => {

	res.setEncoding("utf8");

	res.pipe(bl((err, data)=>{
		if(err) throw err

		console.log(data.toString())
	}))

	res.on("error", console.log)
});

/* Para ejecutarlo, pon esto en el terminal: "node collect-bl.js http://www.ibmbigdatahub.com/tag/1008"  */