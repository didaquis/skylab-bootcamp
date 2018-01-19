// Un ejemplo de poyfill
Array.prototype.showMeTheArray = function (){
	console.table(this); // En este caso "this" se refiere al Array.
}

// # Challenge ShuffleArray!

/**
 * Array.shuffle() Crea un clon exacto de un array y desordena aleatoriamente sus elementos.
 *
 * @code
 *  var originalArray = [1,2,3,'a','b','c'];
 * 	var newArray = originalArray.shuffle();
 * @endcode
 *
 * @return {array} newArray. Retorna un nuevo array.
 */
Array.prototype.shuffle = function (){
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		newArray.push(this[i]);
	}
	// newArray == just a clone of "this" (the original array)!
	var currentIndex = newArray.length;
	var tempValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex); // cojo un elemento al azar
		currentIndex -= 1;
		tempValue = newArray[currentIndex]; // Me guardo el valor de la posición "A"
		newArray[currentIndex] = newArray[randomIndex]; // Copio el valor de "B" en la posición "A"
		newArray[randomIndex] = tempValue; // Copio el valor de "A" en la posición "B"
	}
	return newArray;
}

var a = [1,2,3,'a','b','c'];
console.table(a);
var b = a.shuffle(); // Llamo al nuevo método
console.table(b);
console.log( (a === b)? "Los arrays son iguales": " Los arrays son distintos");

