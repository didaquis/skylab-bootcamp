var express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! (get)\n'))
app.post('/', (req, res) => res.send('Hello World! (post)\n'))

const port = process.argv[2]

app.listen(port, () => console.log(`landing server running on port: ${port}`))


/* 
Para ver como funcionar:
Abre el servidor usando el terminal: node index.js 7898
Ahora haz una petición, por ejemplo usando una aplicación como 'Postan'. Haz una petición de tipo "get" a esta url: localhost:7898

Otra manera de conectar es abriendo otro terminal y ejecutando: curl localhost:7898
*/