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
	var result = [];
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
function sum_and_product(arr){
	var resultOfSum = 0;
	for (var i = 0; i < arr.length; i++) {
		resultOfSum += arr[i];
	}
	console.log("La suma de los enteros es: " + resultOfSum);

	var resultOfProduct = 1;
	for (var i = 0; i < arr.length; i++) {
		resultOfProduct *= arr[i];
	}
	console.log("La multiplicación de los enteros es: " + resultOfProduct);
}

sum_and_product([2,3,4]);




// ### addItems
function addItems(){
	var items = [];
	for (var i = 0; i < arguments.length; i++) {
		items.push(arguments[i]);
		console.log(arguments[i]);
	}
}

addItems("item!", "another item");




// ### generateArrayLength
function arrayRange(firstValue, expectedPositions){
	var result = [];
	for (var i = 0; i < expectedPositions; i++) {
		result.push(firstValue++);
	}

	return result;
}

console.log(arrayRange(1, 4)); // [1, 2, 3, 4]
console.log(arrayRange(-6, 4)); // [-6, -5, -4, -3]




// ### last
function last(arr, numberOfItemsToReturn = 1){
	if(numberOfItemsToReturn >= arr.length){
		return arr;
	}
	return arr.splice( (arr.length - numberOfItemsToReturn), numberOfItemsToReturn );
}

console.log( last([7, 9, 0, -2]) ); // -2
console.log( last([7, 9, 0, -2],3) ); // [9, 0, -2]
console.log( last([7, 9, 0, -2],6) ); // [7, 9, 0, -2]




// ### sortItems
function sortItems(arr){
	arr.sort(function(a, b) {
		return a - b;
	});
	console.log(arr);
}

sortItems( [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ] ); // -4,-3,1,2,3,5,6,7,8




// ### getRandom
function getRandomItemFromArray(arr){
	randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

console.log( getRandomItemFromArray(["A", "B", "C", "D"]) );




// ### findDuplicates
function findDuplicates(arr){
	var revisedItems = [], duplicatedItems = [];

	for (var i = 0; i < arr.length; i++) {
		if(revisedItems.indexOf(arr[i]) === -1){
			revisedItems.push(arr[i]);
		}else{
			duplicatedItems.push(arr[i]);
		}
	}

	return duplicatedItems;
}

console.log( findDuplicates(["A", "B", "C", "B", "D", "D"]) ); // ["B", "D"]




// ### mergeArrays
function mergeArrays(array1, array2){
	var concatenated = array1.concat(array2);
	var result = [];
	for (var i = 0; i < concatenated.length; i++) {
		if(result.indexOf(concatenated[i]) === -1){
			result.push(concatenated[i]);
		}
	}
	return result;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArrays(array1, array2)); // [3, 2, 30, 1]




// ### separateEven
function separateEven(input){
	var arr = input.split(""); // convierto el string en un array
	var arr_result = [];

	for (var i = 0; i < arr.length; i++) {

		arr_result.push(arr[i]);

		if(arr[i+1] === undefined){
			continue;
		}
		if( (arr[i] % 2 == 0) && (arr[i+1] % 2 == 0) ){
			arr_result.push('-');
		}

	}

	return arr_result.join("");
}

console.log( separateEven("025468") ); // "0-254-6-8"
console.log( separateEven("033") ); // "033"





//### findPairSum
function findPairSum(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }
    console.log(result);
    return result.slice(2, 4);
}
console.log("Numbers= [10,20,10,40,50,60,70], target=50 and the output should be 2, 3 => " + findPairSum([10, 20, 10, 40, 50, 60, 70], 50));




// ### flattenArray
function flat(arr, newArray) {
    newArray = newArray || [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat(arr[i], newArray);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;

}

flat([1, 2, 3, [4, 5], 6]);
flat([1, 2, [3, 4, [1, 2, [1, 2, 3]]], 5, 6]);


