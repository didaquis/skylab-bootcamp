function reverseString(str){
	if(str === ''){
		return '';
	}else{
		return reverseString( str.slice(1) ) + str.charAt(0); // en la primera vuelta, pasamos a la función "ello". Este "return" no se termina hasta que se ha evaluado la nueva llamada a la función. Después de tantas llamadas como sean necesarias, hay una llamada que entra en el "if" y a partir de aquí se desencadenan todos los returns (del último al primero de todos). En este caso hay 6 returns, uno para cada letra más uno adicional que es cuando se rompe la recursividad. Para leer más sobre esto, busca: call stack.
	}
}

console.log( reverseString('hello') ); // olleh

/**
 *  Mismo código que antes, pero refactorizado!
 *
	function reverseString(str){
		if(str){
			return reverseString( str.slice(1) ) + str.charAt(0);
		}
		return '';
	}
 * 
 */

console.log( reverseString('hello') ); // olleh
