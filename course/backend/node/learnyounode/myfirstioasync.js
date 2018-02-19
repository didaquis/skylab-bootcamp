 /**
  * Ejercicio 4
  *
  * Para practicar: https://github.com/workshopper/learnyounode
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