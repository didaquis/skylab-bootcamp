// # Arrays practice

// ### isArray
function isArray(element){
	if(element === null || element === undefined){
		return false;
	}
	var result = Object.prototype.toString.call(element).slice(8,-1);
	return (result == "Array")? true : false;
}

console.log(isArray('Skylab'));    // this should returns false
console.log(isArray([3, 5]));      // this should returns true



// ### joinElements
function joinElements(elements){
	return elements.join(',');
}

var beatles = ['John','George','Ringo','Paul'];
console.log(joinElements(beatles));




// ### array_Clone
function array_Clone(source){
	var array_result = [];

	for (var i = 0; i < source.length; i++) {
		if( isArray(source[i]) ){
			// Ejemplo de recursividad
			array_result.push( array_Clone(source[i]) );
		}else{
			array_result.push(source[i]);
		}
	}
	return array_result;
}

//console.log(array_Clone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]





