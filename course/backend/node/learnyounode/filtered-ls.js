/*

  Crea un programa que dado un directorio imprima una lista de archivos
  filtrados por la extensión. El primer argumento será la ruta al directorio
  (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si
  recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.

  Nota: el segundo argumento no incluye el punto '.'.

  La lista de archivos a imprimir en consola debe hacerse un archivo por
  línea y debes utilizar Async I/O.

 */

const fs = require('fs')
const path = require('path')

const _path = process.argv[2]
const ext = process.argv[3]

// fs.readdir(_path, (err, files) => {
//     if (err) throw err

//     files.forEach(file => {
//         if (path.extname(file) === `.${ext}`) console.log(file) // WHAT happens with hidden file '.txt'?
//     })
// })

fs.readdir(_path, (err, files) => {
    if (err) throw err

    const filtered = files.filter(file => {
        return path.extname(file) === `.${ext}` // WHAT happens with hidden file '.txt'?
    })

    //filtered.forEach(console.log) // WARN! console.log accepts all arguments provided by forEach (current, index, array), so output is -> filtered-ls.js [sm]:22 helloworld.txt 0 ["helloworld.txt"]
    filtered.forEach(file => console.log(file))
})