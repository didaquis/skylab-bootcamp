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
var car1 = {
	"brand": "Seat",
	"model": "León",
	"color": "black",
	"description": function(){
		return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
	}
}
console.log(car1.description());


function Car(brand, model, color) {
	this.brand = brand;
	this.model = model;
	this.color = color;

	this.description = function(){
		return "My " + this.color + " " + this.brand + " " + this.model + " is great!";
	}
}
var car2 = new Car("Fiat", "Punto", "yellow");
console.log(car2.description());



// car2.constructor;  // retorna el constructor con el que se construyó este objeto

// Modifico el prototipo objeto "Car"
Car.prototype.run = function() { console.log("rrrrrr..."); };
car2.run(); // "rrrrrr..."

