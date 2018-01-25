/**
 * Diferentes ejemplos de como realizar "Chained methods" en JavaScript Vanilla (EcmaScript 5)
 * 
 * @version 1.0.0
 * 
 * @author Dídac García
 */


// *****************************************


function chain(source){

	var source = source;

	var first_function = function(arg){
		source = arg + source + arg;
		return this;
	};

	var second_function = function(arg){
		source = arg + source + arg;
		return this;
	};

	var third_function = function(arg){
		console.log(source);
	};

	return {
		first: first_function,
		second: second_function,
		third: third_function
	};

};

chain('eureka').first('$').second('#').third();


// *****************************************


/**
 * Un ejemplo de "chained methods" en el que encadenamos el mismo método
 * @param  {String} source Cadena de texto que quiere ser tratada
 * @return {String}        Devuelve el String de entrada rodeado por los valores indicados en wrap()
 */
function chainedMethodWithTheSameName(source){
	/**
	 * Rodea un string con los parametros establecidos
	 * @param  {String} arg1 Valor que se quiere concatenar delante
	 * @param  {String} arg2 Valor que se quiere concatenar detrás, si no se especifica se iguala a "arg1"
	 * @return {Object} 
	 */
	function wrap(arg1, arg2){
		if(arg2 === undefined){
			arg2 = arg1;
		}
		source = arg1 + source + arg2;
		return this;
	};

	/**
	 * Método toString personalizado
	 * @return {String}
	 */
	function toString(){
		return source;
	};

	/**
	 * Observa que el return evalua que función debe ejecutarse
	 */
	return {
		wrap: wrap,
		toString: toString
	};
}

console.log( chainedMethodWithTheSameName('something').wrap('$').wrap('[',']').wrap('{','}').wrap('<','>').wrap('#').toString() );


// *********************************


var test = function () {

	var i = 0;

	var add = function (j) {
		i += j;
		return this;
	};

	var subtract = function (j) {
		i -= j;
		return this;
	};

	var print = function () {
		console.log(i);
	};

	return {
		add: add,
		subtract: subtract,
		print: print
	};
};

var x = test();

x.add(7).subtract(2).print(); // 5

// *********************************


