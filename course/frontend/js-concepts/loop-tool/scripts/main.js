
"use strict";


function loop(arr, callback, i) {
	i = i || 0;

	if (i < arr.length) {
		callback(arr[i]);

		loop(arr, callback, ++i);/* Aquí si le pasamos el tercer parámetro */
	}
}

function addSymbol(el) {
	console.log(el + '$');
}



/**
 * Fíjate que al llamar a la función solo le pasamos dos parámetros. 
 * El último parámetro (i) se establecerá como "undefined" menos cuando la función "loop" se ejecute desde dentro de ella misma.
 */ 
console.log(loop([1, 2, 3], addSymbol));
console.log(loop([1, 2, 3], addSymbol));
