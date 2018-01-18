/*
	* 
	* Challenge: Un juego del ahorcado!
	*
*/

function Hangman(mysteriousWord, attemps){

	this.updateUnderscoreToPrint = function(){
		var lettersAppeared = this.gameStatus.lettersAlreadyAppeared;
		var newUnderscore = "";
		for (var i = 0; i < mysteriousWord.length; i++) {
			if(lettersAppeared.indexOf(mysteriousWord[i]) === -1 ){
				newUnderscore += "_";
			}else{
				newUnderscore += mysteriousWord[i];
			}
		}
		this.gameStatus.underscoreToPrint = newUnderscore;
	};

	this.initGame = function (){

		this.gameStatus = {
			"underscoreToPrint": "",
			"lettersAlreadyAppeared": []
		};

		console.log("Playing to hangman...");

		var underscores = "";
		for (var i = 0; i < mysteriousWord.length; i++) {
			underscores += "_";
		}
		this.gameStatus.underscoreToPrint = underscores;

		console.log( this.gameStatus.underscoreToPrint );
	};

	this.initGame(); // inicializo el juego (este método es invocado cada vez que se genera una instancia)

	this.try = function(userSayLetter){
		if(mysteriousWord.indexOf(userSayLetter) === -1){
			console.log("Dijiste la letra '" + userSayLetter + "' y... FALLASTE!");
			attemps--;
			console.log("Te quedan " + attemps + " intentos.");

			/* Comprobamos si el juego ha terminado */
			if(attemps === 0){
				console.log("GAME OVER!");
			}

		}else{
			console.log("Dijiste la letra '" + userSayLetter + "' y... ACERTASTE!");
			this.gameStatus.lettersAlreadyAppeared.push(userSayLetter);
			
			this.updateUnderscoreToPrint(); // Actualizamos los guiones bajos para mostrarselos al usuario

			/* Comprobamos si el jugador ha acertado la palabra */
			var arrUnderscore = this.gameStatus.underscoreToPrint.split("");
			if( arrUnderscore.indexOf("_") === -1 ){
				console.log("GANASTE");
			}
		}

		console.log( this.gameStatus.underscoreToPrint );
	};

}

var gameplay = new Hangman("potato", 10);

gameplay.try("t");

gameplay.try("a");

gameplay.try("h");

gameplay.try("f");














