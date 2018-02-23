/*
	## CLIENTE HTTP (Ejercicio 10 de 13) https://github.com/workshopper/learnyounode

¡Crea un Servidor de tiempo y hora TCP !

El servidor debe escuchar conexiones TCP en el puerto indicado por el
primer argumento del programa. Para cada conexión debes escribir la fecha
actual y la hora en formato 24hs del siguiente modo:

   "AAAA-MM-DD hh:mm"

seguido por un carácter newline('\n'). Tanto el mes, el día como la hora y
minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:

   "2013-07-06 17:42"

*/

const net = require('net');

const port = process.argv[2];

const server = net.createServer(function(socket) { //'connection' listener
  	console.log('server connected');

  	socket.on('end', function() {
		console.log('server disconnected');
  	});


  	/* Obtenemos una fecha con este formato: AAAA-MM-DD HH:MM (2018-02-20 15:42) */
  	function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    function now () {
      let d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }


  	socket.end(`${now()}\r\n`); /* Respondemos con la fecha actual y cerramos la conexión */

  	socket.on('close', () =>console.log('closing socket'))
});

/* Llamamos al método 'listen' del objecto 'server' q es una instancia de 'net.createServer' */
server.listen(port, function() { //'listening' listener
  	console.log(`server running on port: ${port}`);
});


/*
 * Para probarlo:
 * primero ejecuta esto en el terminal: node time-server.js 3456
 * En otro terminal ejecuta: curl localhost:3456
 */
