/*
	## CLIENTE HTTP (Ejercicio 9 de 13) https://github.com/workshopper/learnyounode
	Solución usando el módulo "concat-stream"

Este ejercicio es similar al anterior puesto que debes usar http.get().
Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.

Tu programa deberá imprimir el contenido de cada una de las URLs en
consola en el mismo orden que fueron recibidos los argumentos. No deberás
imprimir el largo, solo el contenido como String, pero debes respetar el
orden de llegada de los argumentos.


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

