// Un ejemplo de poyfill
Array.prototype.showMeTheArray = function (){
	console.table(this); // En este caso "this" se refiere al Array.
}

// # Challenge ShuffleArray!

/**
 * Array.random() Crea un clon exacto de un array y desordena aleatoriamente sus elementos.
 *
 * @code
 *  var originalArray = [1,2,3,'a','b','c'];
 * 	var newArray = originalArray.random();
 * @endcode
 *
 * @return {array} clonedArray. Retorna un nuevo array.
 */
Array.prototype.random = function (){
	var clonedArray = [];
	for (var i = 0; i < this.length; i++) {
		clonedArray.push(this[i]);
	}
	// clonedArray == just a clone of "this" (the original array)!
	var currentIndex = clonedArray.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex); // cojo un elemento al azar
		currentIndex -= 1;
		temporaryValue = clonedArray[currentIndex]; // Me guardo el valor de la posición "A"
		clonedArray[currentIndex] = clonedArray[randomIndex]; // Copio el valor de "B" en la posición "A"
		clonedArray[randomIndex] = temporaryValue; // Copio el valor de "A" en la posición "B"
	}
	return clonedArray;
}

var a = [1,2,3,'a','b','c']; // creo un array
console.table(a);
var b = a.random(); // Llamo al nuevo método
console.table(b);
console.log( (a === b)? "Los dos arrays son iguales": " Los dos arrays son distintos");


