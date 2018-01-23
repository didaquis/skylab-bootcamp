
// ## reduce
function countVowels(source){
	var characters = source.toLowerCase().split('');
	var vowels = "aeiou";

	var countVowels = characters.reduce(function (accumulator,current) {
		if( vowels.indexOf(current) !== -1){
			return accumulator + 1;
		}else{
			return accumulator;
		}
	}, 0);
	
	return countVowels;
}

var text = "potato";

console.log( countVowels(text) );


