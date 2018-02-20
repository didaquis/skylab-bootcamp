/*
	## CLIENTE HTTP (Ejercicio 9 de 13) https://github.com/workshopper/learnyounode
	Solución usando el módulo "concat-stream"
*/

/* Importamos un módulo */
const http = require('http');
const concatStream = require('concat-stream')


// Solución usando callbackHell

http.get(urlOne, (res) => {
	res.setEncoding("utf8");
	res.pipe(concatStream(data => {
		console.log(data)

		http.get(urlTwo, (res) => {
			res.setEncoding("utf8");
			res.pipe(concatStream(data => {
				console.log(data)

				http.get(urlThree, (res) => {
					res.setEncoding("utf8");
					res.pipe(concatStream(data => {
						console.log(data)
					}))
					res.on("error", console.log)
				});

			}))
			res.on("error", console.log)
		});

	}))
	res.on("error", console.log)
});

