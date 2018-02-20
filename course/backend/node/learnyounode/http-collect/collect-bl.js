/*
	## CLIENTE HTTP (Ejercicio 8 de 13) https://github.com/workshopper/learnyounode
	Solución alternativa usando el módulo "bl"
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