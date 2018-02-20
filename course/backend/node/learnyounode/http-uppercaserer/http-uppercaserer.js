/*

Ejercicio 12: https://github.com/workshopper/learnyounode

Escribe un servidor HTTP que reciba sólo peticiones POST y convierta los
caracteres del cuerpo de la petición a mayúsculas y lo devuelva al
cliente.
El servidor deberá escuchar en un puerto cuyo número será el primer
argumento del programa.

 */


const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
    if (req.method === 'POST')
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

const port = process.argv[2]

server.listen(port, () => console.log(`http uppercaserer running on port ${port}`))

// Para probarlo:
//  node http-uppercaserer 8000
//  curl -X POST --upload-file ./helloworld.txt http://localhost:8000