const { Transform } = require('stream')

const toUpperCase = new Transform({
	transform(chunk, encoding, next) {
		this.push(chunk.toString().toUpperCase())

		next()
	}
})

process.stdin.pipe(toUpperCase).pipe(process.stdout)

/* Ejecuta esto en el terminal así: node index.js */