/**
 * Ejercicio 2: https://github.com/workshopper/learnyounode
 */

/*

  Escribe un programa que reciba uno o más números como argumentos de la
  consola e imprima la suma de dichos números a consola(stdout).
 */

var result = 0;
for (let i = 2; i < process.argv.length; i++){
        result += Number((process.argv[i]))
}
console.log(result)
