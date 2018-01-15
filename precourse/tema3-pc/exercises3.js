// https://github.com/agandia9/Subjects-PreCourse
// https://github.com/agandia9/Subjects-PreCourse/blob/master/functions.md


// # Functions JS

// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function salute(myName){
	return console.log("Hola " + myName);
}

salute("Dídac");




// b) Intenta retornar los valores en lugar de usar console.log
function salute2(myName){
	return "Hola " + myName;
}

console.log(salute2("Dídac"));




// c) Ahora, añade tu edad y concaténala al return
function salute3(myName, age){
	return "Hello " + myName +", you are " + age + " years old.";
}

console.log(salute3("Dídac", 35));




// d) Iguala tu función a una variable y ejecútala
function salute4(myName, age){
	return "Hello " + myName +", you are " + age + " years old.";
}

var myFunction = salute4("Dídac", 35);
console.log(myFunction);




// e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.
function myName(name){
	return "Hello " + name + ". ";
}

function myAge(age){
	return "I'm " + age + " years old. ";
}

console.log(myName("Dídac") + myAge(35));




// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myName2(name){
	return "Hello " + name + ". ";
}

function myAge2(age){
	return age;
}

function myRandomNumber(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(myName2("Dídac") + ( myAge2(35) + myRandomNumber(0,10) ).toString());




// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
var name = "Dídac";
var age = 35;

function myName3(name){
	return name;
}

function myAge3(age){
	return age;
}

console.log(myName3(name) + " " + myAge3(age));





// g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
function myName4(name){
	return name;
}

function myAge4(age){
	return age;
}

function mainSalute(name, age){
	var name = myName4(name);
	var age = myAge4(age);
	
	return name + " " + age;
}

console.log(mainSalute("Dídac", 35));




// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function myName5(name){
	return name;
}

function myAge5(age){
	return age;
}

function randomInt(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mainSalute2(name){
	var name = myName5(name);
	var randomInteger = randomInt(1,999);
	var age = myAge5(randomInteger);
	
	return name + " " + age;
}

console.log(mainSalute2("Dídac"));




// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
function myName6(name){
	return name;
}

function myAge6(age){
	return age;
}

function randomInteger(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mainSalute3(name){
	var name = myName6(name);
	var randomInt = randomInteger(0,50);
	var age = myAge6(randomInt);
	var checkAge = "";
	if(age < 20){
		checkAge = "You are so young!";
	} else if(age > 20){
		checkAge = "oh boy!";
	}
	return name + " " + age + " " + checkAge;
}

console.log(mainSalute3("Dídac"));




// j) Al return de la función name(), concaténale otro mensaje
function myName7(name){
	return name + " AKA: The boss! ";
}

function myAge7(age){
	return age;
}

function randomInteg(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mainSalute4(name){
	var name = myName7(name);
	var randomInt = randomInteg(0,50);
	var age = myAge7(randomInt);
	var checkAge = "";
	if(age < 20){
		checkAge = "You are so young!";
	} else if(age > 20){
		checkAge = "oh boy!";
	}
	return name + " " + age + " " + checkAge;
}

console.log(mainSalute4("Dídac"));




// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function myName8(name){
	return name + " AKA: The boss!";
}

function myAge8(age){
	return age;
}

function randomI(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mainSalute5(name){
	var name = myName8(name);
	var randomInt = randomI(0,50);
	var age = myAge8(randomInt);
	return "The first function return: '" + name + "'. The second function return: '" + age + "'";
}

console.log(mainSalute5("Dídac"));





// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
function myName9(name){
	if(name == "Dídac" || name == "Didac" || name == "didac" || name == "dídac"){
		return name + " AKA: The boss!";
	}
	return "¿Who are you?";
}

function myAge9(age){
	return age;
}

function randomIn(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function mainSalute6(name){
	var name = myName9(name);
	var randomInt = randomIn(0,50);
	var age = myAge9(randomInt);
	return "The first function return: '" + name + "'. The second function return: '" + age + "'";
}

console.log(mainSalute6("Pedro"));





// m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

// ya lo he estado haciendo así!






// n ) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
function myNam(name){
	if(name == "Dídac" || name == "Didac" || name == "didac" || name == "dídac"){
		return name + " AKA: The boss!";
	}
	return "¿Who are you?";
}

function myAg(age){
	return age;
}

function ranIn(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFunction(name){
	return "The first function return: '" + myNam(name) + "'. The second function return: '" + myAg(ranIn(1,50)) + "'";
}

console.log(fatherFunction("Dídac"));





// ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
function myN(name){
	if(name == "Dídac" || name == "Didac" || name == "didac" || name == "dídac"){
		return name + " AKA: The boss!";
	}
	return "¿Who are you?";
}

function myA(age){
	return age;
}

function rI(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFunc(name){
	var a_results = [];
	a_results.push(myN(name), myA(rI(1,50)));
	return "The first function return: '" + a_results[0] + "'. The second function return: '" + a_results[1] + "'";
}

console.log(fatherFunc("Dídac"));




// o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
function mN(name){
	if(name == "Dídac" || name == "Didac" || name == "didac" || name == "dídac"){
		return name + " AKA: The boss!";
	}
	return "¿Who are you?";
}

function mA(age){
	return age;
}

function rInt(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFun(name){
	var a_results = [];
	a_results.push(mN(name), mA(rInt(1,50)));
	return a_results;
}

function superFatherFun(name){
	var results = fatherFun(name);
	results.push("hello from the dark side..."); 
	return "Hello: '" + results[0] + "'. The second function return: '" + results[1] + "'. " + results[2];
}

console.log(superFatherFun("Dídac"));




// p) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.
function mN1(name){
	if(name == "Dídac" || name == "Didac" || name == "didac" || name == "dídac"){
		return name + " AKA: The boss!";
	}
	return name;
}

function mA1(age){
	return age;
}

function rInt1(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFunct(name){
	var a_results = [];
	a_results.push(mN1(name), mA1(rInt1(18,30)));
	return a_results;
}

function superFatherFunct(){
	var names = ["Dídac", "Pedro", "Marc", "Julia", "Lorena", "Maite", "Susana", "Alex", "Sonia", "Alfredo"];

	var selectedName1 = fatherFunct( names[rInt1(0, names.length -1)] );
	var selectedName2 = fatherFunct( names[rInt1(0, names.length -1)] );
	console.log(selectedName1, selectedName2);

	if(selectedName1[1] > selectedName2[1]){
		console.log(selectedName1[0] + " es mayor que " + selectedName2[0]);
	}else if(selectedName1[1] < selectedName2[1]){
		console.log(selectedName2[0] + " es mayor que " + selectedName1[0]);
	}else{
		console.log(selectedName1[0] + " tiene misma edad que " + selectedName2[0]);
	}
}

superFatherFunct();



// p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.
function mN2(name){
	return name;
}

function mA2(age){
	return age;
}

function rInt2(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFuncti(name){
	var obj_results = {
		_name_ : mN2(name),
		_age_: mA2(rInt2(18,30)),
	};
	return obj_results;
}

function superFatherFuncti(){
	var names = ["Dídac", "Pedro", "Marc", "Julia", "Lorena", "Maite", "Susana", "Alex", "Sonia", "Alfredo"];

	var selectedName1 = fatherFuncti( names[rInt2(0, names.length -1)] );
	var selectedName2 = fatherFuncti( names[rInt2(0, names.length -1)] );
	console.log(selectedName1, selectedName2);

	if(selectedName1._age_ > selectedName2._age_){
		console.log(selectedName1._name_ + " es mayor que " + selectedName2._name_);
	}else if(selectedName1._age_ < selectedName2._age_){
		console.log(selectedName2._name_ + " es mayor que " + selectedName1._name_);
	}else{
		console.log(selectedName1._name_ + " tiene misma edad que " + selectedName2._name_);
	}
}

superFatherFuncti();




// p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.
function mN3(name){
	return name;
}

function mA3(age){
	return age;
}

function rInt3(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function fatherFunctio(name){
	var obj_results = {
		_name_ : mN3(name),
		_age_: mA3(rInt3(18,30)),
	};
	return obj_results;
}

function showElegantDataFromObject(myObject){
	console.log("\n");
	for(var prop in myObject){
		console.log(prop + " " + myObject[prop]);
	}
}

function superFatherFunctio(){
	var names = ["Dídac", "Pedro", "Marc", "Julia", "Lorena", "Maite", "Susana", "Alex", "Sonia", "Alfredo"];

	var selectedName1 = fatherFunctio( names[rInt3(0, names.length -1)] );
	var selectedName2 = fatherFunctio( names[rInt3(0, names.length -1)] );

	showElegantDataFromObject(selectedName1);
	showElegantDataFromObject(selectedName2);

	if(selectedName1._age_ > selectedName2._age_){
		console.log("\n" + selectedName1._name_ + " es mayor que " + selectedName2._name_);
	}else if(selectedName1._age_ < selectedName2._age_){
		console.log("\n" + selectedName2._name_ + " es mayor que " + selectedName1._name_);
	}else{
		console.log("\n" + selectedName1._name_ + " tiene misma edad que " + selectedName2._name_);
	}
}

superFatherFunctio();


