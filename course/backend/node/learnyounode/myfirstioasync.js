 /**
  * Ejercicio 4
  *
  * Para practicar: https://github.com/workshopper/learnyounode
  */
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, content) => {
	if(err){
		throw new Error('ERR-IO-ASYNC')
	}
	let textSplited = content.split('\n')
	console.log(textSplited.length-1)
});