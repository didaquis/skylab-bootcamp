/*
 * 
 * Challenge: generar un secreto, el cual solo puede ser accesible con el password correcto.
 *
 * No debemos poder acceder de ninguna otra manera.
 *
 */

function Box(secret, password){
	/* Fíjate que las siguientes dos lineas no son una propiedad, sino una variable. Si fueran una propiedad, no conseguiríamos ocultar su valor. Al ser variables, si podemos hacerlo

	Adicionalmente, dejo las lineas comentadas, ya que son innecesarias debido al comportamiento de JavaScript. Cuando genero una instancia nueva, las variables comentadas ya funcionan persé y además existirán siempre para operar dentro de la función. Para saber más, investigar sobre "javascript closures". */
	//var secret = secret;
	//var password = password;

	// método que retorna el password si la contraseña es correcta
	this.getSecret = function(userInputYourPassword){
		if(userInputYourPassword === password){
			return "Secreto: " + secret;
		}
	};


	/* Vamos a ampliar el ejercicio! (nuevos métodos para establecer nuevo secreto y cambiar contraseña) */
	// método que establece un nuevo secreto (si la contraseña es correcta)
	this.setSecret = function(userInputNewSecret, userInputYourPassword){
		if(userInputYourPassword === password){
			secret = userInputNewSecret;
			return "Tu secreto está a salvo.";
		}
	};

	// método que permite establecer una nueva contraseña (si la contraseña es correcto)
	this.changePassword = function(newPassword, userInputYourPassword){
		if(userInputYourPassword === password){
			password = newPassword;
			return "Tu contraseña ha sido cambiada.";
		}
	};
}

var box = new Box("The cake is a lie", "admin1234");

console.log( "Recupero mi secreto => ", box.getSecret("admin1234") ); // Contraseña correcta, le doy acceso al password
console.log( box.getSecret("foo") ); // No le doy acceso al secreto, contraseña errónea

// Los siguientes ejemplos no deben de poder funcionar, ya que estamos tratando de evitar que accedan directamente al secreto.
console.log( box.secret );
console.log( box.password );
console.log( window.box.password );
console.log( box ); // incluso así no nos muestra el secreto!


// Establezco un nuevo secreto
box.setSecret("I'm SuperMan!", "admin1234");

// Compruebo que ha funcionado
console.log( "Recupero mi nuevo secreto => ", box.getSecret("admin1234") );

// Vamos a modificar el password
box.changePassword("skylab", "admin1234");

// Compruebo que ha funcionado
console.log( "Recupero mi nuevo secreto con el nuevo password => ", box.getSecret("skylab") );



