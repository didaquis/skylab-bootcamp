// # Object practice

// ### is_object
function is_object(element){
	if(element === null || element === undefined){
		return false;
	}
	var result = Object.prototype.toString.call(element).slice(8,-1);
	return (result == "Object")? true : false;
}

console.log(is_object({}));



// ### Create object car
var seat_leon = {
	/* Esto se llama, crear un objeto de manera literal */
	"brand": "Seat",
	"model": "León",
	"color": "black",
	"description": function(){
		return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
	}
}
console.log( seat_leon.description() );


function Car(brand, model, color) {
	// definimos las propiedades del objeto
	this.brand = brand;
	this.model = model;
	this.color = color;
/*

	* Realizar esto aquí no es una buena práctica, es mejor hacerlo en el prototype! (más abajo tienes el código)

	this.description = function(){
		return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
	}
*/
}

Car.prototype.description = function(){
	return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
}

var fiat_punto = new Car("Fiat", "Punto", "yellow");
console.log(fiat_punto.description());



// fiat_punto.constructor;  // retorna el constructor con el que se construyó este objeto

// Modifico el prototipo objeto "Car"
Car.prototype.run = function() { console.log("rrrrrr..."); };
fiat_punto.run(); // "rrrrrr..."

