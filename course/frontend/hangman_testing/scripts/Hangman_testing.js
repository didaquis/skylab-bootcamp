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
				newUnderscore += " _";
			}else{
				newUnderscore +=  " " + mysteriousWord[i].toUpperCase();
			}
		}
		this.gameStatus.underscoreToPrint = newUnderscore;
	};

	this.initGame = function (){
		this.gameStatus = {
			"underscoreToPrint": "",
			"lettersAlreadyAppeared": []
		};

		var underscores = "";
		for (var i = 0; i < mysteriousWord.length; i++) {
			underscores += " _";
		}
		this.gameStatus.underscoreToPrint = underscores;
	};

	this.initGame(); // inicializo el juego (este método es invocado cada vez que se genera una instancia)

	this.try = function(userSayLetter){
		if(attemps === 0){
			return 'GAME OVER.';
		}

		if(userSayLetter.length === 1){
			// el usuario solo introduce una letra
			if(mysteriousWord.indexOf(userSayLetter) === -1){
				attemps--;

				if(attemps === 0){
					return 'GAME OVER.';
				}
			}else{
				this.gameStatus.lettersAlreadyAppeared.push(userSayLetter);

				this.updateUnderscoreToPrint(); // Actualizamos los guiones bajos para mostrarselos al usuario

				/* Comprobamos si el jugador ha acertado la palabra */
				var arrUnderscore = this.gameStatus.underscoreToPrint.split("");
				if( arrUnderscore.indexOf("_") === -1 ){
					attemps = 0;
					return 'You have guessed the word, well done!';
				}
			}
			return (attemps + this.gameStatus.underscoreToPrint );
		}else{
			// el usuario trata de adivinar la palabra entera

			if(userSayLetter === mysteriousWord){
				attemps = 0;
				return 'You have guessed the word, well done!';
			}
			attemps = 0;
			return 'Sorry, you have not guessed... the correct word is ' + mysteriousWord;
		}
	};
}

/*
 *
 * 	Implementación alternativa realizada por el compañero Carlos
 *

function Hangman(word, attemps) {
    var cadena = [];
    for (var i = 0; i < word.length; i++) {
        cadena.push('_');
    }
    var play = true;
    var ok = false;
    this.try = function (charOrWord) {
        var message = '';
        if (play) {
            if (charOrWord.length <= 1) {
                // QUERY all this logic could be processed in one function?
                for (var i = 0; i < word.length; i++) {
                    if (charOrWord.toLowerCase() === word.charAt(i).toLowerCase()) {
                        ok = true;
                        // cadena.splice(i, 1, _word.toUpperCase());
                        cadena[i] = charOrWord.toUpperCase();
                    }
                }
                if (ok) {
                    (cadena.indexOf('_') === -1) ?
                    (message = cadena.join(" ") + ' // Very Well you acerted', play = false) :
                    (ok = false, message = attemps + " " + cadena.join(" "));
                } else {
                    --attemps;
                    (attemps === 0) ?
                    (message = 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.', play = false) :
                    (message = attemps + " " + cadena.join(" "));
                }
            } else {
                // QUERY all this logic could be processed in one function?
                play = false;
                return (charOrWord === word ? 'You have guessed the word, well done!' : 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.');
            }
        } else {
            message = 'GAME OVER.';
        }
        return message;
    }
}

 */