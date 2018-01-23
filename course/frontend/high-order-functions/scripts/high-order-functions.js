// # Challenge High Order Functions

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




// ## Callback
function accessBar(age, callbackFn){
	age >= 18 ? callbackFn(true) : callbackFn(false);
}

function advisor(allowed){
	console.log( (allowed) ? 'The entrance is allowed' : 'The entrance is not allowed' );
}

accessBar(8, advisor);
accessBar(23, advisor);
// la función "advisor" se ejecutará cuando accesBar retorne un valor. Dicho valor, se manda a la función "advisor". En este ejemplo, la función "advisor" es un callback





// ## every & some
/* Array.every */
function allWordsHaveFiveLettersOrMore(items){
	return items.every(function (word) {
		return word.length > 4;
	});
}

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

console.log( allWordsHaveFiveLettersOrMore(months) );


/* Array.some */
function moreFiveLetter(item){
	return item.some(function (word){
		return word.length >= 5;
	});
}

var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december'];

console.log( moreFiveLetter(months) );





// ## Callback, another example
function request(callbackFn){
	console.log("Pidiendo datos al servidor...");

	setTimeout(function (){
		console.log('Response received from server');
		var status = 200;
		callbackFn(status);
	}, 3000); // Al cabo de tres segundos, llamaremos a la función que nos llegue como parámetro.

}

function serverRequest(status){
	console.log("Request succes! Received status: " + status);
}

request( serverRequest );






