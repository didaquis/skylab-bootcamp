// https://github.com/agandia9/Subjects-PreCourse
// https://github.com/agandia9/Subjects-PreCourse/blob/master/objects.md


// # JS Objects

// a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
function propertiesInObject(myObject){
	for(let key in myObject) {
		console.log(key);
	}
}

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
propertiesInObject(avenger);
// En este ejemplo fíjate que la variable "key" de dentro del bucle la estoy declarando con "let" en vez de con "var".



// b) Ahora, crea una función que liste solo los valores de las propiedades.
function valuesInObject(myObject){
	for(var prop in myObject) {
		console.log(myObject[prop]);
	}
}

var randomGuy = { 
    name : "Jesuschrist", 
    age : 33, 
};
valuesInObject(randomGuy);
// Fíjate que dentro de mi objeto "randomGuy" acabo la lista de propiedades con una coma. Esto esta permitido y se llama "Trailing comma".




// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
function changeValueOfPropertieInObject(myObject,propToChange,newValueOfProp){
	for(var prop in myObject){
		if(prop === propToChange){
			myObject[prop] = newValueOfProp;
		}
		console.log(prop + " => " + myObject[prop]);
	}
}

var newAvenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
changeValueOfPropertieInObject(newAvenger, "class", "XI");




// d) Ahora, elimina la propiedad ID y asegura los cambios.
function deletePropertiOfObject(myObject,propToDelete){
	for(var prop in myObject){
		if(prop === propToDelete){
			delete myObject[prop];
		}
	}
}

var anotherAvenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
deletePropertiOfObject(anotherAvenger, "id");
console.log(anotherAvenger.id); // undefined




// e) Añade una nueva propiedad, por ejemplo city y dale un valor.
function addPropertieAndValueToObject(myObject,propToAdd,valueToAdd){
	myObject[propToAdd] = valueToAdd;
}

var userData = { 
    name : "Dídac", 
    age : 35
};
addPropertieAndValueToObject(userData, "city", "Terrassa");




// e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
console.log(userData.city); // Terrassa




// f) Lista el numero de propiedades que contiene el objeto.
function countNumberOfPropiertiesOfObject(myObject){
	var countOfProperties = 0;
	for(var prop in myObject){
		countOfProperties++;
	}
	console.log(countOfProperties);
}

var dog = {
	name: "Laika",
	color: "Brown",
}
countNumberOfPropiertiesOfObject(dog);




// g) Cambia la propiedad name por fullName.
function changeNameOfPropertie(myObject,prop,newNameOfProp){
	myObject[newNameOfProp] = myObject[prop]; // creo una nueva propiedad con la misma información de la propiedad original
	delete myObject[prop]; // borro la propiedad original
}

var sameDog = {
	name: "Kudryavka",
	color: "Brown",
}
changeNameOfPropertie(sameDog,"name", "fullName");




// g1) Asegura los cambios
console.log(sameDog.fullName);




// h) Lista todas las propiedades del objeto a través de un console.log()
function detailsOfDog(myDogObject){
	console.log("The name of my dog is " +myDogObject.name+ " and her color is " +myDogObject.color + "." ); //Fíjate que aquí accedemos al valor de la propiedad con un punto "." en vez de con "[]"
}

var myDog = {
	name: "Kudryavka",
	color: "Brown",
}
detailsOfDog(myDog)




// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
myDog.race = "Street Dog";




//h2) Asegura los cambios volviendo a listar los valores del objeto
console.log(myDog.race);




// i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
function Avenger(name, realName, iconic){
	this.name = name;
	this.realName = realName;
	this.iconicElement = iconic;
}

var avenger_Thor = new Avenger("Thor", "Thor Odinson", "Magic Hammer"); // creo una instancia del objeto "Avenger".
var avenger_Hulk = new Avenger("Hulk", "Bruce Banner", "I recommend you do not make him angry");




// j) Crea otro objeto y imprime sus propiedades por pantalla.
var avenger_CaptainAmerica = new Avenger("Captain America", "Steve Rogers", "Shield of vibranium");
console.log(avenger_CaptainAmerica);




// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
function Zopenco(tipo, nivel){
	this.tipo = tipo;
	this.nivel = nivel;

	this.detailsOfProperties = function (){
		console.log(" Este " + this.tipo + " es de nivel " + this.nivel)
	}
}

var zopenco_1 = new Zopenco("idiota", "superior");

zopenco_1.detailsOfProperties(); // llamo al método que hay declarado en el constructor del objeto




// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
// Solución A: retorna un string
function listValueOfPropertie(arrayOfObjects, prop){
	var results = "";
	arrayOfObjects.forEach(
		function(oAvenger){
			if(results != ""){
				results += ", ";
			}
			return results += oAvenger[prop];
		}
	);
	return results;
}


// Solución B: retorna un array
function arrayOfValueOfPropertie(arrayOfObjects, prop){
	var results = [];
	arrayOfObjects.forEach(
		function(oAvenger, index){
			return results[index] = oAvenger[prop];
		}
	);
	return results;
} 



// Creo un constructor de objetos
function Avenger_object(name, realName, iconic){
	this.name = name;
	this.realName = realName;
	this.iconicElement = iconic;
}

// creo dos instancias de objeto
var avenger__Thor = new Avenger_object("Thor", "Thor Odinson", "Magic Hammer"); // creo una instancia del objeto "Avenger".
var avenger__Hulk = new Avenger_object("Hulk", "Bruce Banner", "I recommend you do not make him angry");

// Creo un array con todos los objetos que le quiero pasar a la función:
var listOfAvengers = [avenger__Thor, avenger__Hulk];

// Llamo a la función que me pide el ejercicio (solución A, retorna string):
console.log(listValueOfPropertie(listOfAvengers,"realName"));

// Llamo a la función que me pide el ejercicio (solución B, retorna array):
console.log(arrayOfValueOfPropertie(listOfAvengers,"realName"));

// Fíjate que en este ejercicio hay dos ejemplos distintos de "forEach()" en javascript.





// m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
function whoIsInTeam(arrayOfObjects,teamColor){
	var filteredMembers = arrayOfObjects.filter(
		function(oMember) {
			return oMember.team == teamColor;
		}
	); // interesante ejemplo de "array.filter()".

	var list = "";
	filteredMembers.forEach(
		function(oMemberFiltered){
			if(list != ""){
				list += ", ";
			}
			list += oMemberFiltered.name;
		}
	);

	return "Hay " + filteredMembers.length + " miembros del equipo " + teamColor + ". Son: " + list;
}

// Creo un constructor de objetos
function Member(name, team){
	this.name = name;
	this.team = team;
}

// creo instancias de objeto
var juan = new Member("Juan", "Azul");
var paco = new Member("Paco", "Azul");
var julia = new Member("Julia", "Rojo");
var silvia = new Member("Silvia", "Rojo");
var maria = new Member("María", "Rojo");

// Creo un array con todos los objetos que le quiero pasar a la función:
var listOfMembers = [juan, paco, julia, silvia, maria];

// Llamo a la función que me pide el ejercicio:
console.log(whoIsInTeam(listOfMembers,"Rojo"));






// n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
function obtainAverageOfPropertie(arrayOfMembers, prop){

	var sum = 0;

	arrayOfMembers.forEach(
		function(oMember){
			sum = sum + oMember[prop];
		}
	);
	
	return (sum / arrayOfMembers.length);
}

// Creo un constructor de objetos
function MemberOfTeam(name, team, markAv){
	this.name = name;
	this.team = team;
	this.markAverage = markAv;
}

// creo instancias de objeto
var juan = new MemberOfTeam("Juan", "Azul", 34);
var paco = new MemberOfTeam("Paco", "Azul", 45);
var julia = new MemberOfTeam("Julia", "Rojo", 51);
var silvia = new MemberOfTeam("Silvia", "Rojo", 23);
var maria = new MemberOfTeam("María", "Rojo", 31);

// Creo un array con todos los objetos que le quiero pasar a la función:
var membersList = [juan, paco, julia, silvia, maria];


console.log(obtainAverageOfPropertie(membersList, "markAverage"));




// ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
function battle(arrayOfMembers){
	var battle = "";
	for(var i = 0; i <= arrayOfMembers.length - 1; i = i+2){
		battle = arrayOfMembers[i].name + " vs " + arrayOfMembers[i +1].name + ". ";
		if(arrayOfMembers[i].markAverage > arrayOfMembers[i +1].markAverage){
			// el primero tiene un "markAverage" mayor.
			battle += arrayOfMembers[i].name + " es mejor!";
		}else if (arrayOfMembers[i].markAverage == arrayOfMembers[i +1].markAverage){
			// tienen el mismo "markAverage"
			battle += "Ambos están empatados!";
		}else{
			// el segundo tiene un "markAverage" mayor.
			battle += arrayOfMembers[i +1].name + " es mejor!";
		}
		console.log(battle);
	}
}

// Creo un constructor de objetos
function MemberTeam(_id_, name, team, markAv){
	this._id_ = _id_
	this.name = name;
	this.team = team;
	this.markAverage = markAv;
}

// creo instancias de objeto
var juan = new MemberTeam(1, "Juan", "Azul", 34);
var paco = new MemberTeam(2, "Paco", "Azul", 45);
var julia = new MemberTeam(3, "Julia", "Rojo", 51);
var silvia = new MemberTeam(4, "Silvia", "Rojo", 23);

// Creo un array con todos los objetos que le quiero pasar a la función:
var memberList = [juan, paco, julia, silvia];

console.log(battle(memberList));





// ñ1) Intenta crear las parejas de forma aleatoria.
function randomCouples(arrayOfMembers){
	for(var i = 0; i <= arrayOfMembers.length -1; i = i+2){ // Doy saltos de dos en dos, en vez de uno en uno
		if(arrayOfMembers[i +1] == undefined){
			// si entras aquí es porque el array era impar y estas en la última vuelta no has podido seleccionar una pareja (ejemplo: array de 5 posiciones y en esta vuelta tratas de seleccionar la posición 5 y 6 del array, al no existir la posición 6 obtienes un undefined). Y por tanto hay un elemento sin pareja.
			console.log("Desemparejado => " + arrayOfMembers[i].name);
		}else{
			console.log("Pareja => " + arrayOfMembers[i].name + " // "+ arrayOfMembers[i +1].name);
		}
	}
}

function shuffleArray(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Selecciono los elementos a intercambiar:
    randomIndex = Math.floor(Math.random() * currentIndex); // cojo un elemento al azar
    currentIndex -= 1; // gracias a esto recorreré, finalizaré el while e iré recorriendo todo el array.

    // Ahora intercambiaré el valor de una posición del array con una posición random
    temporaryValue = array[currentIndex]; // Me guardo el valor de la posición "A"
    array[currentIndex] = array[randomIndex]; // Copio el valor de "B" en la posición "A"
    array[randomIndex] = temporaryValue; // Copio el valor de "A" en la posición "B"

    // al estar en un "while" realizaré este proceso una vez por cada elemento del array.
  }

  return array; // retorno el mismo array pero con sus valores desordenados.
}


// Creo un constructor de objetos
function MemberMagicTeam(name, team){
	this.name = name;
	this.team = team;
}

// creo instancias de objeto
var juan = new MemberMagicTeam("Juan", "Azul");
var paco = new MemberMagicTeam("Paco", "Azul");
var julia = new MemberMagicTeam("Julia", "Rojo");
var silvia = new MemberMagicTeam("Silvia", "Rojo");
var pedro = new MemberMagicTeam("Pedro", "Azul");

// Creo un array con todos los objetos que le quiero pasar a la función:
var memberMagicList = [juan, paco, julia, silvia, pedro];

//le aplicamos la funcion shuffleArray a nuestro array
memberMagicList = shuffleArray(memberMagicList);

console.log(randomCouples(memberMagicList));


