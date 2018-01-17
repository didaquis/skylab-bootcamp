// # Polyfill

// Creamos una nueva propiedad para los arrays
Array.prototype.nyancat = function(){console.log("nyan!")};
a = new Array;
a.nyancat(); // "nyan!"


// Creamos una nueva propiedad para los arrays
a.__proto__.happy = function() { console.log(this); };
a[0] = "foo"; // establezco una valor para visualizar el ejemplo
a.happy(); // ["foo"]


//modifico una propiedad nativa
Array.prototype.forEach = " destruida!";

// a.forEach(function(n){console.log(n)}); // ERROR! "forEach" ya no es una función.

// Redefinir una propiedad para tener mi propia implementación (en este caso, reescribo "forEach" para añadirle un "console.log()")
Array.prototype.forEach = function(func) {
	console.log("Mi propia implementación!");
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

a.forEach(function(n){console.log(n)}); // "Mi propia implementación!"  \n   "foo"



// Creamos una nueva propiedad para que los strings se conviertan en hashtags de Twitter
String.prototype.hashtag = function(){
	var text = this.trim();
	text = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); // Capitalizo todas las primeras letras del string
	text = text.replace(/\s/g, ''); // Quito los espacios entre las palabras
	return '#' + text;
}

var s = 'Skylab rocks';
console.log( s.hashtag() ); // SkylabRocks
console.log( "esto es un ejemplo".hashtag() ); // #EstoEsUnEjemplo



