function Hangman(mysteriousWord, attemps){

	function updateUnderscoreToPrint(){
		var lettersAppeared = this.gameStatus.lettersAlreadyAppeared;
		var newUnderscore = "";
		for (var i = 0; i < mysteriousWord.length; i++) {
			if(lettersAppeared.indexOf(mysteriousWord[i]) === -1 ){
				newUnderscore += "_";
			}else{
				newUnderscore +=  mysteriousWord[i].toUpperCase();
			}
		}
		this.gameStatus.underscoreToPrint = newUnderscore;
	};

	// Este método es privado, solo es accesible desde dentro de la clase.
	function initGame(){
		this.gameStatus = {
			"underscoreToPrint": "",
			"lettersAlreadyAppeared": []
		};

		var underscores = "";
		for (var i = 0; i < mysteriousWord.length; i++) {
			underscores += "_";
		}
		this.gameStatus.underscoreToPrint = underscores;
	};

	// inicializo el juego (este método es invocado cada vez que se genera una instancia)
	initGame.call(this); // Fíjate que uso "call" porque el método al que llamo es privado

	this.try = function(userSayLetter){
		if(attemps === 0){
			return ['GAME OVER', mysteriousWord];
		}

		if(userSayLetter.length === 1){
			// el usuario solo introduce una letra
			if(mysteriousWord.indexOf(userSayLetter) === -1){
				attemps--;

				if(attemps === 0){
					return ['GAME OVER', mysteriousWord];
				}
			}else{
				this.gameStatus.lettersAlreadyAppeared.push(userSayLetter);

				// Actualizamos los guiones bajos para mostrarselos al usuario
				updateUnderscoreToPrint.call(this);

				/* Comprobamos si el jugador ha acertado la palabra */
				var arrUnderscore = this.gameStatus.underscoreToPrint.split("");
				if( arrUnderscore.indexOf("_") === -1 ){
					attemps = 0;
					return ['WIN', 'You have guessed the word, well done!'];
				}
			}
			return ['PLAYING', attemps , this.gameStatus.underscoreToPrint];
		}else{
			// el usuario trata de adivinar la palabra entera

			if(userSayLetter === mysteriousWord){
				attemps = 0;
				return ['WIN', 'You have guessed the word, well done!'];
			}
			attemps = 0;
			var message = "Sorry, you have not guessed... the correct word was " + mysteriousWord;
			return ['GAME OVER', message];
		}
	};
}