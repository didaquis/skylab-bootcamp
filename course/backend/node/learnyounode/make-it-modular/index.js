/*

  Ejercicio 6: https://github.com/workshopper/learnyounode
 

  Este problema es similar al anterior e introduce la idea de módulos.
  Deberás crear dos archivos para resolver el ejercicio.

  El programa debe imprimir el listado de archivos de un directorio
  filtrando por extensión. Nuevamente el primer argumento será la ruta al
  directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por
  ejemplo si recibes 'txt' deberás filtrar todos los archivos que terminen
  en .txt. Debes usar Async I/O.

  Deberás escribir un archivo modular para hacer la tarea. Dicho módulo debe
  exportar una función que reciba tres parámetros en orden: la ruta del
  directorio, la extensión para filtrar y una función de callback. La idea
  es encapsular toda la lógica dentro del módulo.

  En Node, los callbacks suelen tener una firma convencional de tener
  (error, data). Esto implica que si hay un error el primer parámetro
  devuelve el error sino viene null y el segundo parámetro son los datos.
  Para este ejercicio los datos a devolver es la lista de archivos en forma
  de Array. Si occurre un error, por ejemplo en la llamada a fs.readdir(),
  el callback debe llamarse con dicho error.

  Para completar el ejercicio no debes imprimir desde el módulo, sólo desde
  el programa principal. En caso de que el módulo devuelva un error a tu
  programa principal, simplemente compruébalo y escribe un mensaje
  informativo en consola.

  El módulo debe cumplir el siguiente contrato:

   1. Exportar una función que reciba los parámetros mencionados.
   2. Llamar al callback una única vez cuando ocurre un error o con la lista
      correspondiente.
   3. No debe modificar variables globales o stdout.
   4. Capturar los posibles errores y devolverlos en el callback.

  La ventaja de usar contratos es que el módulo puede ser usado por
  cualquiera que asuma este contrato.

 */


const filteredLs = require('./filtered-ls')
//import filteredLs from './filtered-ls'

const path = process.argv[2]
const ext = process.argv[3]

filteredLs(path, ext, (err, files) => {
    if (err) throw err

    files.forEach(file => console.log(file))
})

/*

Para probarlo: node . ./ js
 */