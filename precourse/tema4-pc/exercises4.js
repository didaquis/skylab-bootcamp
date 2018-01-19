// https://github.com/agandia9/Subjects-PreCourse
// https://github.com/agandia9/Subjects-PreCourse/blob/master/challengesJS.md


// # Final Challenges (JS)!

// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNumbers(){
	var nums = [1,2,3,4,5,6,7,8,9];
	var doubleNums = nums.map(
		function(number){
			return number * 2;
		}
	);

	for(var i = 0; i <= doubleNums.length -1; i++){
		if(doubleNums[i+1] != null){
			console.log(i+1 + "ª pareja " + doubleNums[i] + " - " + doubleNums[i+1]);
		}
	}
}

showNumbers();





// a1) La funcion debería aceptar la array a tratar como argumento.
function showNumb(arrayOfNums){
	var doubleNums = arrayOfNums.map(
		function(number){
			return number * 2;
		}
	);

	for(var i = 0; i <= doubleNums.length -1; i++){
		if(doubleNums[i+1] != null){
			console.log(i+1 + "ª pareja " + doubleNums[i] + " - " + doubleNums[i+1]);
		}
	}
}

showNumb([1,2,3,4,5,6,7,8,9]);





// a2) Pasa también el numero a multiplicar a la función como argumento
function showNumbs(arrayOfNums, multiplier){
	var doubleNums = arrayOfNums.map(
		function(number){
			return number * multiplier;
		}
	);

	for(var i = 0; i <= doubleNums.length -1; i++){
		if(doubleNums[i+1] != null){
			console.log(i+1 + "ª pareja " + doubleNums[i] + " - " + doubleNums[i+1]);
		}
	}
}

showNumbs([1,2,3,4,5,6,7,8,9,10,11], 3);




// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function showN(arrayOfNums, multiplier, numberOfCouples){
	var doubleNums = arrayOfNums.map(
		function(number){
			return number * multiplier;
		}
	);

	for(var i = 0; i <= numberOfCouples -1; i++){
		if(doubleNums[i+1] != null){
			console.log(i+1 + "ª pareja " + doubleNums[i] + " - " + doubleNums[i+1]);
		}
	}
}

showN([1,2,3,4,5,6,7,8,9,10,11], 5, 4);



// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? 
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html
function fibonacci(){
	var fibonacciNumbers = [0,1];
	var newNumber;
	var previusNumber_a;
	var previusNumber_b;

	for(var i = 0; i <= 25; i++){

		previusNumber_a = fibonacciNumbers[i];
		previusNumber_b = fibonacciNumbers[i+1];
		newNumber = previusNumber_a + previusNumber_b;

		fibonacciNumbers.push(newNumber);
	}
	return fibonacciNumbers.join(", ");
}

fibonacci();




// b2) Puedes añadir además, la posición de cada resultado?
function fibonacciAndPosition(){
	var fibonacciNumbers = [0,1];
	var newNumber;
	var previusNumber_a;
	var previusNumber_b;

	for(var i = 0; i <= 25; i++){

		previusNumber_a = fibonacciNumbers[i];
		previusNumber_b = fibonacciNumbers[i+1];
		newNumber = previusNumber_a + previusNumber_b;

		fibonacciNumbers.push(newNumber);
		console.log(fibonacciNumbers[i] + ". Posición: " + [i+1]);
	}
	
}

fibonacciAndPosition();



// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

// Ya lo venía haciendo así, no?





// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
function fibonacciUntilPosition(position){
	var fibonacciNumbers = [0,1];
	var newNumber;
	var previusNumber_a;
	var previusNumber_b;

	for(var i = 0; i <= position -1; i++){

		previusNumber_a = fibonacciNumbers[i];
		previusNumber_b = fibonacciNumbers[i+1];
		newNumber = previusNumber_a + previusNumber_b;

		fibonacciNumbers.push(newNumber);
		console.log(fibonacciNumbers[i] + ". Posición: " + [i+1]);
	}
	
}

fibonacciUntilPosition(6);





// b5) Ahora, muestra los resultados en forma piramidal:
function fibonacciPymamid(position){
	var fibonacciNumbers = [0,1];
	var newNumber;
	var previusNumber_a;
	var previusNumber_b;

	for(var i = 0; i <= position -1; i++){

		previusNumber_a = fibonacciNumbers[i];
		previusNumber_b = fibonacciNumbers[i+1];
		newNumber = previusNumber_a + previusNumber_b;

		fibonacciNumbers.push(newNumber);

		console.log(fibonacciNumbers.join(" "));
	}

	for(var j = position; j >= 0; j--){
		fibonacciNumbers.pop(); // usando pop
		console.log(fibonacciNumbers.join(" "));
	}

	/* 
	// Solución alternativa al bucle anterior:
	for(var j = position; j >= 0; j--){
		fibonacciNumbers.splice(j+1, 1); // usando splice()
		console.log(fibonacciNumbers.join(" "));
	}
	*/
}

fibonacciPymamid(8);





// c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código. El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.
function simpleScriptingProgram(code){
	var stripedCode = code.toString();
	var newCode = [];
	var results;

	for(var i = 0; i <= stripedCode.length -1; i++){
		if(stripedCode[i+1] != null){
			newCode.push(parseInt(stripedCode[i+1]));
		}else{
			newCode.push(stripedCode[0]);
		}
	}
	
	results = newCode.join("");
	return parseInt(results);
}

simpleScriptingProgram(3712); // 7123
simpleScriptingProgram(7123); // 1237



// c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
function codeScript(){
	// fíjate que esta función recorre cualquier número de argumentos que le pasen gracias a "arguments" (el cual es un array)
	for(var j = 0; j <= arguments.length -1; j++){
		console.log(simpleScriptingProgram(arguments[j]));
	}
}

codeScript(3712,7123);



// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
function codeScript2(code1, code2, multiplier){
	var arrayOfCodes = [code1, code2];
	var resFromOtherFunction;
	var result = [];
	var postMultipliedNumbers = [];
	var stripedCode;
	for(var j = 0; j <= arrayOfCodes.length -1; j++){

		resFromOtherFunction = simpleScriptingProgram(arrayOfCodes[j]);

		stripedCode = resFromOtherFunction.toString();

		for(var i = 0; i <= stripedCode.length -1; i++){
			if(stripedCode[i] * multiplier < 9){
				postMultipliedNumbers.push(parseInt(stripedCode[i]) * parseInt(multiplier));		
			}else{
				postMultipliedNumbers.push(parseInt(stripedCode[i]));
			}
		}

		result = postMultipliedNumbers.join("");
		console.log(result);

		// reseteo un par de variables para evitar que me interfieran en la próxima vuelta del bucle.
		result = "";
		postMultipliedNumbers = [];
	}
}

codeScript2(3712, 7123, 2); // 7246, 2467





// c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
function codeDecrypt(code1, divider){
	var originalCode = code1.toString();
	var postDivided = [];
	var postReordered = [];
	var result = "";

	// bucle para chequear si debo dividir el número. En caso necesario, lo dividiré.
	for(var i = 0; i <= originalCode.length -1; i++){
		if(originalCode[i] * divider > 9){
			postDivided.push(parseInt(originalCode[i]));
		}else{
			postDivided.push(parseInt(originalCode[i]) / parseInt(divider));
		}
	}

	// bucle para corregir el orden en que debo retornar los digitos.
	for(var j = 0; j <= postDivided.length -1; j++){
		if(j == 0){
			postReordered.push(postDivided[3]);
		}
		if(j == 3){
			break;
		}
		postReordered.push(postDivided[j]);
	}

	result = postReordered.join("");
	console.log(result);
}
codeDecrypt(2467, 2); // Debería dar: 7123
codeDecrypt(7246, 2); // Debería dar: 3712
// Este ejercicio esta mal porque cuando hace el proceso de división no escoge bien los números que si ha de dividir y cuales no!!




// c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

// function codeScript(code1, code2){... codeDecrypt(code1Encrypt,code2Encrypt)}
/* 
// NO ENTIENDO LO QUE HE DE HACER EN ESTE EJERCICIO!

function detailsOfCrAndDescr(code1,code2,multiplierDivider){
	console.log("El código original numero 1 es: "+ code1);
	console.log("El código original numero 2 es: "+ code2);
	console.log("\nTras encriptarlos por :" + multiplierDivider + ". El resultado es:");
	codeScript2(code1,code2,multiplierDivider);
	console.log("\nAhora los desencriptamos:");
	// codeDecrypt(); // no tengo los valores que le he de pasar porque la función que cifra no los devuelve. Además debería retornarlos en un array y eso me obliga a rehacer la función original, que no cuadra con lo que me dijo el profesor "cuando los ejercicios son c1, c2, c3 se trata de ir programando sobre las funciones que ya has hecho anteriormente y no rehacerlas otra vez."
}

detailsOfCrAndDescr(2467,7246,3);
*/




// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

// la función recibe strings de 4 letras.
// se ha de hacer la transformación de caracter a letra y luego mandar cada código a la función codeScript() (la cual admite cualquier número de parámetros);
function lettersToCodeCripted(text1, text2, text3, text4){
	var dictionary = {
		0: ['A', 'K', 'T', 'F', 'O', 'Y'],
		1: ['B', 'L', 'U', 'G', 'P', 'Z'],
		2: ['C', 'M', 'V', 'H', 'Q', '.'],
		3: ['D', 'N', 'W', 'I', 'R', ','],
		4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
	}
	var texts = [text1, text2, text3, text4];
	var stringAllNumberOfCodes = "";
	var arrayOfCodes = [];
	var indexOfElement;

	for (var i = 0; i < texts.length; i++) {
		// por cada palabra que llega a la función
		for (var j = 0; j < texts[i].length; j++) {
			// por cada letra
			for(var prop in dictionary){
				// por cada propiedad del objeto
				indexOfElement = dictionary[prop].indexOf(texts[i][j]); // busco si hay coincidencia
				if(indexOfElement != -1){
					// si hay coincidencia...
					stringAllNumberOfCodes += prop; // al encontrar coincidencia concateno el nombre de la propiedad (en este caso, las propiedades son números)
					break; // fuerzo la salida de este bucle!
				}
			
			} // por cada propiedad del objeto
		} // fin bucle por cada letra
	} // fin bucle por cada palabra

	arrayOfCodes = stringAllNumberOfCodes.match(/.{1,4}/g); // genero un array partiendo el string en bloques de 4 caracteres!
	//console.log(arrayOfCodes);

	codeScript(arrayOfCodes[0],arrayOfCodes[1],arrayOfCodes[2],arrayOfCodes[3]);
}

lettersToCodeCripted("HI  ", "WE  ", "NEED", "HELP"); // Antes de codificar: 2344, 3444, 3443, 2411; Después de codificar: 3442, 4443, 4433, 4112;





// d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:
/*
	S K Y
	|-|-|
	L A B 
*/
// Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
// Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB
function romanEncrypt(text){
	var a_text = text.split("");
	var result = [];
	var array_blocks = [[],[]];

	for(var i = 0; i <= a_text.length -1; i++){
		// voy separando el texto en dos bloques
		if( i < a_text.length / 2){
			array_blocks[0].push(a_text[i]);
		}else{
			array_blocks[1].push(a_text[i]);
		}
	}

	for(var j = 0; j <= a_text.length -1; j++){
		// voy emparejando las mismas posiciones de los dos bloques
		if(array_blocks[0][j] != null){
			result.push(array_blocks[0][j]);
		}

		if(array_blocks[1][j] != null){
			result.push(array_blocks[1][j]);
		}
	}	

	console.log(result.join(""));
}

romanEncrypt("SKYLAB"); // SLKAYB




// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.
function romanDecrypt(text){
	var a_text = text.split("");
	var result = [];
	var array_blocks = [[],[]];

	for(var i = 0; i <= a_text.length -1; i++){
		// voy separando el texto en dos bloques
		if( i % 2 == 0){
			array_blocks[0].push(a_text[i]);
		}else{
			array_blocks[1].push(a_text[i]);
		}
	}

	result = array_blocks[0].concat(array_blocks[1]);

	console.log(result.join(""));
}

romanDecrypt("SLKAYB"); // SKYLAB




// d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

// Agruparlo todo y añadir "console.log()" de por medio. Lo doy por hecho, ejericio demasiado similar.




// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

// Resuelto, no tengo que cambiar nada porque mi función acepta cualquier longitud de cadena! Así que: resuelto!





// e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:
function sayItWithWords(num){
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	// averiguo la longitud de la cifra (es decir, el total de dígitos del número que llega por parámetro a la función)
	var numOfDigits = num.toString().length;
	var number = num.toString();
	var result = "";

	switch (numOfDigits){
		case 1:
			// número de un solo dígito
			if(num == 0){
				result = "zero";
			}else{	
				result = units[num];
			}
			break;

		case 2:
			// número de dos dígitos
			if( (num % 10 == 0) && (num != 10) ){
				// si el número es divisible entre 10 sin que haya resto y no es 10, es que es una decena (20, 30, 40, 50, etc.)
				result = tens[number[0]];
			}else{
				// al dividirlo entre 10 hay un resto (34, 67, 82, 11, 42, 95, etc)
				if(number[0] == "1"){
					// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
					result = teens[number[1]];
				}else{
					// 21, 36, 62, 78, 31, 86, etc...
					result = tens[number[0]] + "-" + units[number[1]];
				}
			}
			break;

		case 3:
			// número de tres dígitos
			if(num == 100){
				result = "one hundred";
			}else{
				result = "Error!";	
			}
			break;

		default:
			result = "Error!";
	}

	console.log(result);
}

sayItWithWords(5); // five
sayItWithWords(71); // seventy-one
sayItWithWords(0); // zero
sayItWithWords(10); // ten
sayItWithWords(11); // eleven
sayItWithWords(20); // twenty
sayItWithWords(100); // one hundred
sayItWithWords(576); // Error

/*
Planteamiento del problema:
	// Ejemplo A:
	// num = 4 = units[4] =>four
	// A considerar: solo tienen un dígito

	// Ejemplo B:
	// num = 40
	// num[0] = 4 = 
	// num[1] = 0 = 
	// A considerar: dos digitos el segundo de los cuales es 0 y si divido entre 10 modulo = 0;

	// Ejemplo C:
	// num  = 23
	// num[0] = 2 = tens[2] => twenty
	// num[1] = 3 = units[3] => three
	// Dos digitos, si divido entre 10 su módulo NO puede ser 0. Hay que concatenar un guión

	// Ejemplo D:
	// num = 100
	// A considerar: único número de 3 dígitos
*/




// e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:
/*
sayItWithWords(5) => // five => five / 5
sayItWithWords(23) => // twenty-three => twenty + three / 20 + 3
sayItWithWords(71) => // seventy-one => seventy + one / 70 + 1
*/
function sayItWithWordsExtended(num){
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	// averiguo la longitud de la cifra (es decir, el total de dígitos del número que llega por parámetro a la función)
	var numOfDigits = num.toString().length;
	var number = num.toString();
	var result = "";

	switch (numOfDigits){
		case 1:
			// número de un solo dígito
			if(num == 0){
				result = "zero" + " => " + "zero" + " / " + number;
			}else{	
				result = units[num] + " => " + units[num] + " / " + number;
			}
			break;

		case 2:
			// número de dos dígitos
			if( (num % 10 == 0) && (num != 10) ){
				// si el número es divisible entre 10 sin que haya resto y no es 10, es que es una decena (20, 30, 40, 50, etc.)
				result = tens[number[0]] + " => " + tens[number[0]] + " / " + number;
			}else{
				// al dividirlo entre 10 hay un resto (34, 67, 82, 11, 42, 95, etc)
				if(number[0] == "1"){
					// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
					result = teens[number[1]] + " => " + teens[number[1]] + " / " + number;
				}else{
					// 21, 36, 62, 78, 31, 86, etc...
					result = tens[number[0]] + "-" + units[number[1]];
					result += " => " + tens[number[0]] + " + " + units[number[1]] + " / " + number[0] + "0 + " + number[1];
				}
			}
			break;

		case 3:
			// número de tres dígitos
			if(num == 100){
				result = "one hundred" + " => " + "one hundred" + " / " + number;
			}else{
				result = "Error!";	
			}
			break;

		default:
			result = "Error!";
	}

	console.log(result);
}

sayItWithWordsExtended(23); // twenty-three => twenty + three / 20 + 3




// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.
function sayItWithWordsExtendedAndAmplified(num){
	var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

	// averiguo la longitud de la cifra (es decir, el total de dígitos del número que llega por parámetro a la función)
	var numOfDigits = num.toString().length;
	var number = num.toString();
	var result = "";

	switch(numOfDigits){
		case 1:
			// número de un solo dígito
			if(num == 0){
				result = "zero" + " => " + "zero" + " / " + number;
			}else{	
				result = units[num] + " => " + units[num] + " / " + number;
			}
			break;

		case 2:
			// número de dos dígitos
			if( (num % 10 == 0) && (num != 10) ){
				// si el número es divisible entre 10 sin que haya resto y no es 10, es que es una decena (20, 30, 40, 50, etc.)
				result = tens[number[0]] + " => " + tens[number[0]] + " / " + number;
			}else{
				// al dividirlo entre 10 hay un resto (34, 67, 82, 11, 42, 95, etc)
				if(number[0] == "1"){
					// 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
					result = teens[number[1]] + " => " + teens[number[1]] + " / " + number;
				}else{
					// 21, 36, 62, 78, 31, 86, etc...
					result = tens[number[0]] + "-" + units[number[1]];
					result += " => " + tens[number[0]] + " + " + units[number[1]] + " / " + number[0] + "0 + " + number[1];
				}
			}
			break;

		case 3:
			// número de tres dígitos
			if(num % 100 == 0){
				// si es divisible entre 100 y no queda resto: 100, 200, 300, 400, etc.
				result = hundreds[number[0]] + " => " + hundreds[number[0]] + " / " + number;
			}else if( (number[1] == "0") && (number[2] != "0") ){
				// 405, 506, 302, etc.
				result = hundreds[number[0]] + " and " + units[number[2]];
				result += " => " + hundreds[number[0]] + " + " + units[number[2]] + " / " + number[0] + "00 + " + number[2];
			}else if( (number[1] == "1") && (number[2] == "0") ){
				// 410, 610, 710, etc.
				result = hundreds[number[0]] + " and " + teens[number[2]];
				result += " => " + hundreds[number[0]] + " + " + teens[0] + " / " + number[0] + "00 + " + "10";
			}else if( (number[1] == "1") && (number[2] != "0") ){
				// 412, 517, 411, etc.
				result = hundreds[number[0]] + " and " + teens[number[2]];
				result += " => " + hundreds[number[0]] + " + " + teens[number[2]] + " / " + number[0] + "00 + " + number[1] + number[2];
			}else if( (number[1] > "1") && (number[2] == "0") ){
				// 440, 560, 320, etc.
				result = hundreds[number[0]] + " and " + tens[number[1]];
				result += " => " + hundreds[number[0]] + " + " + tens[number[1]] + " / " + number[0] + "00 + " + number[1] + number[2];
			}else if( (number[1] > "1") && (number[2] > "0") ){
				// 342, 576, 861, 134, etc.
				result = hundreds[number[0]] + " and " + tens[number[1]] + "-" + units[number[2]];
				result += " => " + hundreds[number[0]] + " + " + tens[number[1]] + " + " + units[number[2]] + " / " + number[0] + "00 + " + number[1] + "0 + " + number[2];
			}
			break;

		case 4:
			// número de tres dígitos
			if(num == 1000){
				result = "one thousand" + " => " + "one thousand" + " / " + number;
			}else{
				result = "Error!";	
			}
			break;

		default:
			result = "Error!";
	}

	console.log(result);
}

sayItWithWordsExtendedAndAmplified(500); // five hundred => five hundred / 500
sayItWithWordsExtendedAndAmplified(234); // two hundred and thirty-four => two hundred + thirty + four / 200 + 30 + 4
sayItWithWordsExtendedAndAmplified(140); // one hundred and forty => one hundred + forty / 100 + 40
sayItWithWordsExtendedAndAmplified(112); // one hundred and twelve => one hundred + twelve / 100 + 12






// f) Recibiendo el siguiente texto por parámetro a tu función... :
/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
*/

/*
Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: 
Signos de puntuación: 
- "." => "," 
- "," => "" 
Palabras: 
- "dolor" => "potato" 
- "lorem" => "tomato" 
- "labor" => "cucumber" 
- "consequatur" => "garlic" 
- "ipsum" => "onion"
*/
function funnyLorem(loremText){
	// gracias a este truco sustituyo todas las apariciones de un valor un valor por otro
	loremText = loremText.split(" dolor ").join(" potato ");
	loremText = loremText.split("Lorem ").join("tomato ");
	loremText = loremText.split(" lorem ").join(" tomato ");
	loremText = loremText.split(" labor ").join(" cucumber ");
	loremText = loremText.split(" consequatur ").join(" garlic ");
	loremText = loremText.split(" consequatur.").join(" garlic.");
	loremText = loremText.split(" ipsum ").join(" onion ");
	// también substituir las comas y los puntos
	loremText = loremText.split(",").join("");
	loremText = loremText.split(".").join(",");
	return loremText;
}

var loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";
console.log(funnyLorem(loremText));




// f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario
function funnyLoremBis(loremText){

	var objectOfmatches = {
		"," : ["", 0],
		"." : [",", 0],
		"dolor" : ["potato", 0],
		"lorem" : ["tomato", 0],
		"labor" : ["cucumber", 0],
		"consequatur" : ["garlic", 0],
		"ipsum" : ["onion", 0]
	}

	var numberOfMatches = 0;
	var stringToBeARegex
	var dinamicRegex = "";
	for (var propertie in objectOfmatches){
		// un pequeño hack para arreglar la regular expression para el punto y la coma: 
		stringToBeARegex = propertie;
		if(stringToBeARegex.length == 1){
			// arreglo la regular expression para el "." y la ","
			stringToBeARegex = "\\" + stringToBeARegex;
		}
		dinamicRegex = new RegExp(stringToBeARegex, "ig");

		// recuento de matches:	
		numberOfMatches = loremText.match(dinamicRegex).length;
		objectOfmatches[propertie][1] = numberOfMatches;
		numberOfMatches = 0;

		// sustituimos los matches:
		loremText = loremText.replace(dinamicRegex, function replacing(){
			return objectOfmatches[propertie][0];
		})
	}	


	for(var prop in objectOfmatches){
		console.log("Se encontraron " + objectOfmatches[prop][1] + " coincidencias de: '" + prop + "'\n");
	}

	console.log(loremText);
}

var loremText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";
funnyLoremBis(loremText);



