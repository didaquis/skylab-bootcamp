const pug = require('pug')

const compiled = pug.compileFile('views/index.pug')

console.log(compiled({ name: 'Pug'}))