/*
	## CLIENTE HTTP (Ejercicio 11 de 13) https://github.com/workshopper/learnyounode


Escribe un servidor HTTP que sirva un mismo archivo de texto para todas
las peticiones que reciba.

El servidor deberá escuchar en un puerto cuyo número será el primer
argumento del programa. Como segundo argumento recibirá la ruta a la
ubicación del archivo. Debes usar fs.createReadStream() para servir como
stream los contenidos del archivo en la respuesta del servicio.

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