// https://github.com/agandia9/Subjects-PreCourse
// https://github.com/agandia9/Subjects-PreCourse/blob/master/methods.md


// # Strings

// a) Puedes contar cuantas letras tiene tu nombre?
function countLetters(myName){
	return console.log("My Name has " + myName.length + " letters");
}

countLetters("Dídac");



// b) Añade tu apellido e indica en que posición se encuentra
function obtainPositionOfSecondWord(myName){
	for (var i = 0; i <= myName.length - 1; i++) {
		if(myName[i] == " "){
			return console.log("Your first last name starts on position " + (i + 1));
		}
	}
}

obtainPositionOfSecondWord("Dídac García");



// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
function obtainJustTheFirstName(myName){
	var array_of_words = myName.split(" ");
	return console.log(array_of_words[0]);
}

obtainJustTheFirstName("Dídac García");



// d) Ahora, solo tu apellido.
function obtainJustTheLastName(myName){
	var array_of_words = myName.split(" ");
	return console.log(array_of_words[1]);
}

obtainJustTheLastName("Dídac García");



// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function jamesBond(myName){
	var array_of_words = myName.split(" ");
	var last_name = array_of_words[1];
	return console.log("Mi nombre es " + last_name + ", " + myName);
}

jamesBond("James Bond");



// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function salute(myName){
	var array_of_words = myName.split(" ");
	array_of_words[0] = "Mr.";
	return console.log("Hello, " + array_of_words[0] + " " + array_of_words[1]);
}

salute("Dídac García");



// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function secondWordToUppercase(myName){
	var array_of_words = myName.split(" ");
	var last_name = array_of_words[1];
	return console.log("My lastname is " + last_name.toUpperCase());
}

secondWordToUppercase("Dídac García")



// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
function tellTheTruth(myName){
	var array_of_words = myName.split(" ");
	var the_truth = array_of_words[0] + " is awesome!";
	return console.log(the_truth);
}

tellTheTruth("Dídac García");



// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function firstLetterOfEachWord(myName){
	var array_of_words = myName.split(" ");
	var result = "";
	for(var i = 0; i <= array_of_words.length - 1; i++){

		if(result != ""){
			result += ".";
		}

		result += array_of_words[i][0].toUpperCase();
	}
	return console.log(result);
}

firstLetterOfEachWord("Dídac García");





// # Arrays

// a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
function parseString(myName){
	var array_of_letters = [];
	var result = "";

	for(var i = 0; i <= myName.length -1; i++){
		if(myName[i] != " "){
			array_of_letters.push(myName[i].toUpperCase());
		}
	}

	for(var j = 0; j <= array_of_letters.length -1; j++){
		if(result != ""){
			result += "/";
		}
		result += array_of_letters[j];
	}

	return console.log(result);
}

parseString("Dídac García");




// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
function parseSecondWordOfString(myName){
	var array_of_letters = [];
	var result = "";
	var array_of_words = myName.split(" ");
	myName = array_of_words[1];

	for(var i = 0; i <= myName.length -1; i++){
		if(myName[i] != " "){
			array_of_letters.push(myName[i].toUpperCase());
		}
	}

	for(var j = 0; j <= array_of_letters.length -1; j++){
		if(result != ""){
			result += "|";
		}
		result += array_of_letters[j];
	}

	return console.log(result);
}

parseSecondWordOfString("Dídac García");




//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
function showLetterAndHisPosition(myName){
	var array_of_words = myName.split(" ");
	var name = array_of_words[0];
	var array_of_letters = [];
	var result = "";
	
	for(var i = 0; i <= name.length -1; i++){
		array_of_letters[i] = name[i].toUpperCase();
	}

	for(var j = 0; j <= array_of_letters.length - 1; j++){
		if(result != ""){
			result += ", ";
		}

		result += (j+1) + "º " + array_of_letters[j];
	}

	return console.log(result);
}

showLetterAndHisPosition("Dídac García");




// d)Como en el ejercicio anterior, pero seleccionando tu apellido
function showLetterAndHisPositionAlternative(myName){
	
	var value_of_index = 0;
	var array_of_letters = myName.split("");
	var result = "";

	for(var i = 0; i <= myName.length - 1; i++){
		if(myName[i] == " "){
			value_of_index = i;
			break;
		}
	}

	for(var j = 0; j <= array_of_letters.length - 1; j++){
		if(j > value_of_index){
			if(result != ""){
				result += ", ";
			}
			result += (j+1) + "º " + array_of_letters[j].toUpperCase();
		}
	}

	return console.log(result);
}

showLetterAndHisPositionAlternative("Dídac García");




// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
function firstLetterOfEachWordAgain(myName){
	var array_of_words = myName[0].split(" ");
	var result = "";
	for(var i = 0; i <= array_of_words.length - 1; i++){

		if(result != ""){
			result += ".";
		}

		result += array_of_words[i][0].toUpperCase();
	}
	return console.log(result);
}

firstLetterOfEachWordAgain(["Dídac García"]);




// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
function sayHello(userData){
	return console.log("My name is " + userData[0].toUpperCase() + " and I'm " + userData[2] + " years old.");
}

sayHello(["Dídac","García",35]);




// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
function addValueToArray(arrayData,newValue){
	arrayData.push(newValue);
	
	var listOfValues = arrayData.join(", "); // Fíjate en el método "join()". Crea un string concatenando los valores de un array separados por aquello que yo quiera. En este caso ", ":
	
	return console.log("New value added to array! => " + listOfValues);
}

addValueToArray(["Dídac","García",35], "Terrassa");




// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function deleteValueToArray(arrayData,newValue){
	var array_result = [];

	for(var i = 0; i <= arrayData.length - 1; i++){
		if(arrayData[i] != newValue){
			array_result.push(arrayData[i]);
		}
	}

	var result = "Value deleted from array! => ";
	var listOfValues = "";
	for(var j = 0; j <= array_result.length - 1; j++){
		if(listOfValues != ""){
			listOfValues += ", ";
		}
		listOfValues += array_result[j];
	}
	return console.log(result + listOfValues);
}

deleteValueToArray(["Dídac","García",35], "Terrassa");





// j) Ahora, elimina el nombre y asegura los cambios
function deleteFirstValueOfArray(arrayData){
	var result = "First value deleted from array! => ";
	var listOfValues = "";

	arrayData.shift();

	for(var j = 0; j <= arrayData.length - 1; j++){
		if(listOfValues != ""){
			listOfValues += ", ";
		}
		listOfValues += arrayData[j];
	}
	return console.log(result + listOfValues);
}

deleteFirstValueOfArray(["Dídac","García",35]);




// k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición
function addElementToArrayOnFirstPosition(arrayData,newValue){

	arrayData.splice(0, 0, newValue);
	var indice = 0;
	while(indice <= arrayData.length - 1){
		console.log(arrayData[indice]);
		indice++;
	}
}

addElementToArrayOnFirstPosition(["García",35],"Dídac");




// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
function elevateInteger(array_int){
	var result = 0;
	for(var i = 0; i <= array_int.length - 1; i++){
		result = array_int[i] * 2;
		console.log("The value of " + array_int[i] + " multiplied by 2 = " + result);
	}
}

elevateInteger([0,1,2,3,4,5,6,7,8,9,10]);





// l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
function elevateIntegerByInteger(array_int, multByInteger){
	var result = 0;
	for(var i = 0; i <= array_int.length - 1; i++){
		result = array_int[i] * multByInteger;
		console.log("The value of " + array_int[i] + " multiplied by " + multByInteger + " = " + result);
	}
}
elevateIntegerByInteger([0,1,2,3,4,5,6,7,8,9,10], 3);


// Esto es una versión alternativa de resolverlo. Aquí uso "map()";
function elevateIntegerByInteger_2(mult){
	return [0,1,2,3,4,5,6,7,8,9].map(function(pepe){
		return pepe * mult;
	})
}
elevateIntegerByInteger_2(8);



// m) Podrías mostrarlos en el orden inverso?
function returnReverseDataFromArray(arrayData){
	for(var i = arrayData.length - 1; i >= 0; i--){
		console.log(arrayData[i]);
	}
}

returnReverseDataFromArray([0,1,2,3,4,5,6,7,8,9,10]);





// n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?
function followRepetitions(myName){

	// creo un objeto de apariciones
	var apariciones = {};

	// recorro el string que llega a la función y por cada caracter:
	var array_of_letters = myName.split("");

	for(var i = 0; i <= array_of_letters.length - 1; i++){
		if(array_of_letters[i] != " "){

			if(apariciones[array_of_letters[i].toUpperCase()] === undefined){
				// si en el objeto de apariciones no existe una clave con esa letra, añado la clave con valor = 1.
				apariciones[array_of_letters[i].toUpperCase()] = 1;
			}else{
				// si ya existía en el objeto de apariciones, incremento el número de la aparición en 1
				apariciones[array_of_letters[i].toUpperCase()]++;
			}
		}
	}

	var result = "";

	for (var property in apariciones) {
	    if(result != ""){
	    	result += ", "
	    }
	    if(apariciones[property] > 1){
	    	// solo si hay más de una repetición...
	    	result += "the letter '" + property + "' => " + apariciones[property] + " times";
	    }
	}

	return console.log(myName + ", " + result);
}

followRepetitions("Dídac García");





// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
function deleteRepetitions(myName){

	// creo un objeto de apariciones
	var apariciones = {};

	// recorro el string que llega a la función y por cada caracter:
	var array_of_letters = myName.split("");

	for(var i = 0; i <= array_of_letters.length - 1; i++){
		if(array_of_letters[i] != " "){

			if(apariciones[array_of_letters[i].toUpperCase()] === undefined){
				// si en el objeto de apariciones no existe una clave con esa letra, añado la clave con valor = 1.
				apariciones[array_of_letters[i].toUpperCase()] = 1;
			}else{
				// si ya existía en el objeto de apariciones, incremento el número de la aparición en 1
				apariciones[array_of_letters[i].toUpperCase()]++;
			}
		}
	}

	var result = "";
	var finalName = "";

	for (var property in apariciones) {
		if(apariciones[property] > 1){
			delete apariciones[property];
		}
	}

	for (var property in apariciones) {

	    if(result != ""){
	    	result += ", "
	    }
	    result += "'" + property + "'";
	    finalName += property;
	}

	return console.log(myName + ", the letters => " + result + " are not repeated, the name is => " + finalName);
}

deleteRepetitions("Dídac García");







// # Numbers

// a) Que hora es? Declara la hora como número y devuelvela como String
function whatTimeIsIt(timeData){
	return console.log("It's " + timeData.toString() + " of morning!");
}

whatTimeIsIt(10.45);




// b) Nono, que hora exactamente? Dime la hora sin minutos
function WhatHourIsIt(timeData){
	return console.log("It's around " + parseInt(timeData) + " of morning!");
}

WhatHourIsIt(10.45);




// c) Ahora, declara tu hora y muéstrala redondeada.
function roundTime(timeData){
	return console.log(Math.round(timeData));
}

roundTime(10.34);




// d) Hagamos una calculadora. Primero, la suma.
function sumIntegers(num1,num2){
	return console.log(num1+num2);
}

sumIntegers(4,5);




// d1) Añade la resta...
function restIntegers(num1,num2){
	return console.log(num1-num2);
}

restIntegers(4,5);




// d2) Y la multiplicación
function multIntegers(num1,num2){
	return console.log(num1 * num2);
}

multIntegers(4,5);




// d3) Por ultimo, la división
function divIntegers(num1,num2){
	return console.log(num1 / num2);
}

divIntegers(4,5);




// d4) Ahora, intenta multiplicar un número por una string, que devuelve?
function multInt(num1,num2){
	return console.log(num1 * num2);
}

multInt(10, "NyanCat"); // NaN




// e) Podemos controlar este error con un condicional if?
function multIntRevised(num1,num2){
	if( isNaN(num1) || isNaN(num2) ){
		return console.log("You can't do this operation!");
	}
	return console.log(num1 * num2);
}

multIntRevised(10, "NyanCat");


