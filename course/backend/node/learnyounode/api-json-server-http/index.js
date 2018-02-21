/*
 ## API JSON EN SERVIDOR HTTP (Ejercicio 13 de 13) https://github.com/workshopper/learnyounode

  Escribe un servidor de HTTP que sirva datos en formato JSON cuando reciba
  una petición GET con la ruta (endpoint) '/api/parsetime'. Asume que la
  petición tiene un parámetro 'iso' cuyo valor es un fecha hora en formato
  ISO.

  Por ejemplo:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  La respuesta JSON debe contener únicamente los propiedades 'hour',
  'minute' y 'second' correspondientes a la fecha recibida. Ejemplo:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Luego, agrega un segundo endpoint con ruta '/api/unixtime' que reciba los
  mismos parámetros que la anterior pero que devuelva la fecha en formato
  UNIX, por ejemplo:

     {
         "unixtime": 1376136615474
     }

  El servidor deberá escuchar en un puerto cuyo número será el primer
  argumento del programa.
 */

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

	const urlData = url.parse(req.url, true); /* Parsemos los datos de la URL */

	switch(urlData.pathname){
		case '/api/parsetime':
			{
				/* Fíjate que con unas llaves {} genero un scope. Esto me permite reaprovechar el nombre de las constantes en cada 'case' del switch */
				const date = new Date(urlData.query.iso);/* Obtenemos la fecha que nos llega por URL */

				/* Generamos los datos que responderá el servidor */
				const data = {
					hour: date.getHours(),
					minute: date.getMinutes(),
					second: date.getSeconds()
				};

				res.writeHead(200, { 'Content-Type': 'application/json' });/* Enviamos las cabeceras */
				res.end(`${JSON.stringify(data)}\n`); /* Enviamos contenido en formato JSON */
			}
			break;


		case '/api/unixtime':
			{
				const date = new Date(urlData.query.iso);/* Obtenemos la fecha que nos llega por URL */

				/* Generamos los datos que responderá el servidor */
				const data = {
					unixtime: date.getTime()
				}

				res.writeHead(200, { 'Content-Type': 'application/json' });/* Enviamos las cabeceras */
				res.end(`${JSON.stringify(data)}\n`); /* Enviamos contenido en formato JSON */
			}
			break;

		default:
			res.writeHead(405)
			res.ens('405 - Sorry! I Can not process that request')
	}

});


/* Llamamos al método 'listen' del objecto 'server' q es una instancia de 'http.createServer' */
const port = process.argv[2] || 5500;
server.listen(port, () => console.log(`server running on port: ${port}`));

/* Ejemplo de parseo de URL
{
protocol: null,
slashes: null,
auth: null,
host: null,
port: null,
hostname: null,
hash: null,
search: '?iso=2013-08-10T12:10:15.474Z',
query: { iso: '2013-08-10T12:10:15.474Z' },
pathname: '/api/parsetime',
path: '/api/parsetime?iso=2013-08-10T12:10:15.474Z',
href: '/api/parsetime?iso=2013-08-10T12:10:15.474Z'
}
*/


/*
 * Para probarlo:
 * primero ejecuta esto en el terminal: node index.js
 * En otro terminal ejecuta: curl 'localhost:5500/api/parsetime?iso=2013-08-10T12:10:15.474Z'
 * En otro terminal ejecuta: curl 'localhost:5500/api/unixtime?iso=2018-02-21T10:10:15.474Z'
 */

