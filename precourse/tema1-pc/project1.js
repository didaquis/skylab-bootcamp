// https://github.com/agandia9/Subjects-PreCourse/blob/master/mini-proj.md


// # Calculator!

//Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

//Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
//Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

// Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]


function calculator(num1,num2){
	var results = [];

	if(num2 === undefined){
		// Si solo me llega un parámetro
		if(isNaN(num1)){
			return console.log("Error: data no valid!");
		}

		// Raíz cuadrada del num1
		results.push(Math.sqrt(num1));
		if(!Number.isInteger(results[0])){
			// Si el resultado no es un entero, limito los decimales a 3.
			results[0] = results[0].toFixed(3);
		}
		return "La raíz cuadrada es: " + results[0];
	}

	// Me llegan dos parámetros
	if( isNaN(num1) || isNaN(num2) ){
		return console.log("Error: data no valid!");
	}

	// Los parámetros son válidos, puedo operar con ellos.
	results.push((num1+num2));
	results.push((num1-num2));
	results.push((num1*num2));
	results.push((num1/num2));

	for(var i = 0; i <= results.length -1; i++){
		if(!Number.isInteger(results[i])){
			// Si el resultado no es un entero, limito los decimales a 3.
			results[i] = results[i].toFixed(3);
		}
	}
	
	console.log("La suma de " + num1 + " y " + num2 + " = " + results[0]);
	console.log("La resta de " + num1 + " y " + num2 + " = " + results[1]);
	console.log("La multiplicación de " + num1 + " y " + num2 + " = " + results[2]);
	console.log("La división de " + num1 + " y " + num2 + " = " + results[3]);
}

calculator(45,21);
calculator(6);
calculator(6,4);
calculator("Batman");
calculator("Robin",2);


