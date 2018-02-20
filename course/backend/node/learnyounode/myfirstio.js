 /**
  * ## MI PRIMER I/O! (Ejercicio 3 de 13)
  *
  * Para practicar: https://github.com/workshopper/learnyounode
  */

/*

  Escribe un programa que, usando una llamada síncrona al sistema de
  archivos, lea un archivo recibido por argumento e imprima a consola la
  cantidad de saltos de línea ('\n') que contiene. Similar a ejecutar cat
  file | wc -l.

  El programa recibirá la ruta al archivo como único argumento.

 */

var fs = require('fs');
let text = fs.readFileSync(process.argv[2]).toString();
let textSplited = text.split('\n');
console.log(textSplited.length-1);