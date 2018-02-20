/*

Este ejercicio es similar al anterior puesto que debes usar http.get().
Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.

Tu programa deberá imprimir el contenido de cada una de las URLs en
consola en el mismo orden que fueron recibidos los argumentos. No deberás
imprimir el largo, solo el contenido como String, pero debes respetar el
orden de llegada de los argumentos.

 */


const logContentsFromUrlsInOrder = require('./logContentsFromUrlsInOrder')

logContentsFromUrlsInOrder(
    'http://google.co.uk',
    'http://google.es',
    'http://google.it',
    'http://google.fr',
    'http://google.ca'
)