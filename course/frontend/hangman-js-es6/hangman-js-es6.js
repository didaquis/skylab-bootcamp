class Hangman {

	constructor(mysteriousWord, attemps){

		let gameStatus = {
			"underscoreToPrint": "",
			"lettersAlreadyAppeared": []
		};

		let underscores = "";
		for (let i = 0; i < mysteriousWord.length; i++) {
			underscores += " _";
		}
		gameStatus.underscoreToPrint = underscores;

		function caseCharacter(userSayLetter) {
			if(mysteriousWord.indexOf(userSayLetter) === -1){
				attemps--;

				if(attemps === 0){
					return 'GAME OVER.';
				}
			}else{
				gameStatus.lettersAlreadyAppeared.push(userSayLetter);

				// Actualizamos los guiones bajos para mostrarselos al usuario
				let newUnderscore = "";
				for (let i = 0; i < mysteriousWord.length; i++) {
					if(gameStatus.lettersAlreadyAppeared.indexOf(mysteriousWord[i]) === -1 ){
						newUnderscore += " _";
					}else{
						newUnderscore +=  " " + mysteriousWord[i].toUpperCase();
					}
				}
				gameStatus.underscoreToPrint = newUnderscore;


				/* Comprobamos si el jugador ha acertado la palabra */
				let arrUnderscore = gameStatus.underscoreToPrint.split("");
				if( arrUnderscore.indexOf("_") === -1 ){
					attemps = 0;
					return 'You have guessed the word, well done!';
				}
			}
			return (attemps + gameStatus.underscoreToPrint );
		}

		function caseWord(userSayLetter){
			if(userSayLetter === mysteriousWord){
				attemps = 0;
				return 'You have guessed the word, well done!';
			}
			attemps = 0;
			return `Sorry, you have not guessed... the correct word is ${mysteriousWord}`;
		}

		this.try = function(userSayLetter){
			if(attemps === 0){
				return 'GAME OVER.';
			}

			if(userSayLetter.length === 1){
				// el usuario solo introduce una letra
				return caseCharacter(userSayLetter);
			}else{
				// el usuario trata de adivinar la palabra entera
				return caseWord(userSayLetter);
			}
		};
	}

}


const game = new Hangman('hello', 10);

game.try('p');
game.try('m');

game.try('h');
game.try('e');
//game.try('l');
//game.try('o');

//game.try('hello');

//game.try('dessert');

