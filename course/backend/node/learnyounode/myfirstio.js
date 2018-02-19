 /**
  * ## MI PRIMER I/O! (Ejercicio 3 de 13)
  *
  * Para practicar: https://github.com/workshopper/learnyounode
  */
var fs = require('fs');
let text = fs.readFileSync(process.argv[2]).toString();
let textSplited = text.split('\n');
console.log(textSplited.length-1);