 /**
  * Ejercicio 4
  *
  * Para practicar: https://github.com/workshopper/learnyounode
  */

/*

  Escribe un programa que use operación de sistema de archivos asíncrona
  para leer un archivo e imprimir en consola el número de saltos de línea
  ('\n') que contiene. Similar a  ejecutar cat file | wc -l.

  El programa recibirá la ruta al archivo como único argumento.

 */

const fs = require('fs');
const path = process.argv[2];

/* Solución uno: */
/*
fs.readFile(path, 'utf-8', (err, content) => {
	if(err){
		throw new Error('ERR-IO-ASYNC')
	}
	let textSplited = content.split('\n')
	console.log(textSplited.length-1)
});
*/


/* Solución dos: */
function readFile(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) return reject(err)

            resolve(data)
        })
    })
}

readFile(path, 'utf-8')
    .then(console.log)
    .catch(console.error)