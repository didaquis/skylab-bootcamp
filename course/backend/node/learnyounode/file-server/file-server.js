/*
	## CLIENTE HTTP (Ejercicio 11 de 13) https://github.com/workshopper/learnyounode
*/

const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((req, res) => {
	fs.createReadStream(file).pipe(res)
});

/* Llamamos al método 'listen' del objecto 'server' q es una instancia de 'http.createServer' */
server.listen(port, () => console.log(`server running on port: ${port}`));

/*
 * Para probarlo:
 * primero ejecuta esto en el terminal: node file-server/file-server.js 7896 ./file-server/example.txt
 * En otro terminal ejecuta: curl localhost:7896
 */