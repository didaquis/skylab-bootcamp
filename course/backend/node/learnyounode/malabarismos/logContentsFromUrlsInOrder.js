/*
	## CLIENTE HTTP (Ejercicio 9 de 13) https://github.com/workshopper/learnyounode
	Solución usando el módulo "concat-stream", recursividad!
*/

const http = require('http')
const concatStream = require('concat-stream')


function logContentsFromUrlsInOrder(...urls) { // COOL! rest operator
    if(urls.length)
        http.get(urls.shift(), res => {
            res.setEncoding('utf-8')

            res.pipe(concatStream(data => {
                console.log(data)

                logContentsFromUrlsInOrder(...urls) // COOL! spread operator
            }))

            res.on('error', console.error)
        })
}

module.exports = logContentsFromUrlsInOrder