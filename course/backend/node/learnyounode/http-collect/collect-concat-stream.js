/*
	## CLIENTE HTTP (Ejercicio 8 de 13) https://github.com/workshopper/learnyounode
	Solución alternativa usando el módulo "concat-stream"
*/

// TRY with:
// - http://www.ibmbigdatahub.com/tag/1008
// - http://api.themoviedb.org/3/movie/popular?api_key=5aee70d47502de15fcdde658cbdcb3c7&language=en-US&page=1

/* Importamos un módulo */
const http = require('http');
const concatStream = require('concat-stream')

let url = process.argv[2]

http.get(url, (res) => {

	res.setEncoding("utf8");

	res.pipe(concatStream(data => {
		console.log('res.pipe -> on data')

		console.log(data) // data is already a string
	}))

	res.on("error", console.log)
});

/* Para ejecutarlo, pon esto en el terminal: "node collect-concat-stream.js http://www.ibmbigdatahub.com/tag/1008"  */