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


