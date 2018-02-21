const fs = require('fs');
const { Transform } = require('stream');
const byline = require('byline'); /* Nos traemos una librería */


const waterIn = fs.createReadStream('./water.txt'); /* Origen de los datos */
const waterOut = fs.createWriteStream('./clean-water.txt'); /* Destino de los datos */

const waterCleaner = new Transform({
	transform(chunk, encoding, next){
		const element = chunk.toString()

		if(element === 'H2O'){
			this.push(`${element}\n`)
		}

		next()
	}
}) 


const waterInElements = byline.createStream(waterIn); /* Transforma el contenido de 'waterIn' linea a linea */

waterInElements.pipe(waterCleaner).pipe(waterOut);

/* Ejecuta esto en el terminal así: node index.js */