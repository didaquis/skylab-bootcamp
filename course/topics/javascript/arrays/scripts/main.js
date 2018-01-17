// # Arrays practice

// ### isArray
function isArray(element){
	if(element === null || element === undefined){
		return false;
	}
	var result = Object.prototype.toString.call(element).slice(8,-1);
	return (result == "Array")? true : false;
}

console.log(isArray('Skylab'));    // false
console.log(isArray([3, 5]));      // true

/*
Solución alternativa: `console.log( Array.isArray([1, 2, 3]) );  // true`

Solución alternativa: `console.log( [1, 2, 3] instanceof Array );  // true`
*/


// ### joinElements
function joinElements(elements){
	return elements.join(',');
}

var beatles = ['John','George','Ringo','Paul'];
console.log(joinElements(beatles));



// ### array_Clone
function recursiveArrayClone(source){
	var result = [];

	for (var i = 0; i < source.length; i++) {
		if( isArray(source[i]) ){
			// Ejemplo de recursividad
			result.push( recursiveArrayClone(source[i]) );
		}else{
			result.push(source[i]);
		}
	}
	return result;
}

console.log(recursiveArrayClone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(recursiveArrayClone([1, 2, [4, 0]])); // [1, 2, [4, 0]]



// ### findDifferences
function simplefiedArray(source){
	// Esta función es recursiva. Retorna un array simple (de un solo nivel), a partir de cualquier array complejo (incluído matrices de n niveles)
	var result = []
	for (var i = 0; i < source.length; i++) {
		if( isArray(source[i]) ){
			result = result.concat( simplefiedArray(source[i]) ); // Recursividad + concat!
		}else{
			result.push(source[i]);
		}
	}
	return result;
}

function difference(a, b){
	var a_Fixed = b_Fixed = [];
	a_Fixed = simplefiedArray(a); // Do the magic!
	b_Fixed = simplefiedArray(b);

	var concatenated = a_Fixed.concat(b_Fixed);

	var result = [];

	for (var i = 0; i < concatenated.length; i++) {
		if(result.indexOf(concatenated[i]) === -1){
			result.push(concatenated[i]);
		}else{
			var indexToDelete = result.indexOf(concatenated[i]);
			result.splice(indexToDelete,1); // Quito la duplicidad del array.
		}
	}

	return result;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference( [1, 2, 3, 4, 5] , [1, [2], [3, [[4]]], [5,6]] ));  // ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]



// ### Sum and Product

//Write a JavaScript program to compute the sum and product of an array of integers.

function sum_and_product(){

}

sum_and_product([2,3,4]);






