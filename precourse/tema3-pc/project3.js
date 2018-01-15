// https://github.com/agandia9/Subjects-PreCourse/blob/master/mini-proj.md


// # BINGO-GAME!

//Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

//Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

//Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

/*
Secuence:
>>> bingo()
<<< prompt('Tell me, who are you?')
>>> Hello *name*, ready to play? This is your card:
...
<<< confirm('Next turn, you confirm?') // true / false
>>> We find 1 match! This is the status of your card now:
...
...
>>> Congrats! You finish the Bingo game in X turns! Do you want to play again?
<<< confirm('Play again?') // true / false
*/


function GameplayData(name, card, stillPlaying = true, singedLine = false, singedBingo = false, numOfThrows = 0, numbersAlreadyAppeared = []){
	this.name = name;
	this.card = card;
	this.stillPlaying = stillPlaying;
	this.singedLine = singedLine;
	this.singedBingo = singedBingo;
	this.numOfThrows = numOfThrows;
	this.numbersAlreadyAppeared = numbersAlreadyAppeared;
}


function obtainName(){
	var nameOfUser = prompt("Please enter your name");
	if(nameOfUser == "" || nameOfUser == null){
		obtainName();
	}else{
		console.log("Hello " + nameOfUser + ". Ready to play? This is your card:");
		return nameOfUser;
	}
}


function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
}


function generateCard(){
	var card = [];
	card.push([] , [], []); // genero un array de arrays

	var alreadyInCard = [];
	var randomInteger = 0;

	card.forEach(function(file){
		// por cada fila del cartón...
		while (file.length < 5){ // Hasta que tenga 5 números válidos en una fila del cartón...
			randomInteger = randomInt(1,99); // obtengo un número random

			// Me aseguro que el número no esta ya en la misma fila del cartón Y (Fíjate en eso "&&") que tampoco esta ya en otra fila del cartón.
			if( (file.indexOf(randomInteger) === -1) && (alreadyInCard.indexOf(randomInteger) === -1) ) {
				// añado el número al cartón
				file.push(randomInteger);
				alreadyInCard.push(randomInteger);
			}
		}
	});

	return card;
}


function showCard(gameplayData){
	if(gameplayData.stillPlaying){
		// si el jugador va a seguir jugando, le muestro el cartón.
		var values;
		console.log("\n");
		for(var i = 0; i <= gameplayData.card.length -1; i++){
			values = gameplayData.card[i].join(" | ");
			console.log("[ " + values + " ]");
		}
		console.log("\n");
	}
}


function askOneMoreTurn(gameplayData){
	var oneMoreTurn = confirm('Next turn, you confirm?');
	var nextNumber;
	if(oneMoreTurn){
		gameplayData = throwNumber(gameplayData);
		return gameplayData;
	}else{
		console.log("Goodbye!");
		gameplayData.stillPlaying = false
		return gameplayData;
	}
}

function throwNumber(gameplayData){

	var SingedOneMoreNumber = false;
	var randomNum;

	while(!SingedOneMoreNumber){
		// mientras no haya cantado número en este turno...
		randomNum = randomInt(1,99); // genero un número con intención de cantarlo

		if(gameplayData.numbersAlreadyAppeared.indexOf(randomNum) === -1) {
			// Si aún no han cantado ese número, lo canto.
			
			console.log(randomNum); // lo canto
			SingedOneMoreNumber = true;

			gameplayData = updateNumOfThrows(gameplayData); // actualizo el contado de turnos
			gameplayData = updateNumbersAlreadyAppeared(gameplayData, randomNum); // actualizo el listado de los números que ya han aparecido
			gameplayData = updateCard(gameplayData, randomNum); // actualizo el cartón del jugador
		}
	}
	return gameplayData;
}

function checkSingedLine(gameplayData){
	// chequea si es necesario cantar línea.
	if(!gameplayData.singedLine){
		// si aún no han cantado línea, chequeo el cartón.
		var fileCompleted = false;
		var successOnFile = 0;

		for(var i = 0; i <= gameplayData.card.length -1; i++){
			// recorro las 3 filas del cartón.
			for(var j = 0; j <= gameplayData.card[i].length -1; j++){
				// recorro todos los números de la fila[i] del cartón.
				if(gameplayData.card[i][j] == "X"){
					// si el número esta tachado en el cartón.
					successOnFile++;
				}
			}
			if(successOnFile == 5){
				fileCompleted = true;
				break;
			}
			successOnFile = 0; // reseteo el contador de aciertos
		}

		if(fileCompleted){
			console.log("\nLINEA!!!\n");
			gameplayData.singedLine = true;
		}
	}
	return gameplayData;
}

function checkSingedBingo(gameplayData){
	// chequea si es necesario cantar bingo y por tanto, finalizar el juego

	if(!gameplayData.singedBingo){
		// si aún no han cantado bingo, chequeo el cartón.
		var fileCompleted = 0;
		var successOnFile = 0;

		for(var i = 0; i <= gameplayData.card.length -1; i++){
			// recorro las 3 filas del cartón.
			for(var j = 0; j <= gameplayData.card[i].length -1; j++){
				// recorro todos los números de la fila[i] del cartón.
				if(gameplayData.card[i][j] == "X"){
					// si el número esta tachado en el cartón.
					successOnFile++;
				}
			}
			if(successOnFile == 5){
				fileCompleted++; // incremento el número de filas totalmente tachadas en uno.
			}
			successOnFile = 0; // reseteo el contador de aciertos
		}

		if(fileCompleted == 3){
			// si las 3 filas del cartón están tachadas
			console.log("\nBINGO!!!!!\n");
			gameplayData.singedBingo = true;
			gameplayData.stillPlaying = false;
			console.log("Congratulations " + gameplayData.name + ", BINGO in just " + gameplayData.numOfThrows + " turns.\n");
			alert("BINGO!!!!!");
			resetGame(gameplayData);
		}
	}

	return gameplayData;
}

function updateCard(gameplayData, randomNum){
	// esta función chequea si hay que tachar un número del cartón.
	for(var i = 0; i <= gameplayData.card.length -1; i++){
		// recorro las 3 filas del cartón.
		for(var j = 0; j <= gameplayData.card[i].length -1; j++){
			// recorro todos los números de la fila[i] del cartón.
			if(gameplayData.card[i][j] == randomNum){
				// si coincide el número del cartón con el que han cantado, lo tacho del cartón.
				gameplayData.card[i][j] = "X";
			}
		}
	}
	return gameplayData;
}

function updateNumOfThrows(gameplayData){
	// incrementa el número de turnos que han pasado
	var throws = gameplayData.numOfThrows;
	throws++;
	gameplayData.numOfThrows = throws;
	return gameplayData;
}

function updateNumbersAlreadyAppeared(gameplayData, randomNum){
	gameplayData.numbersAlreadyAppeared.push(randomNum);
	return gameplayData;
}

function resetGame(gameplayData){
	var playAgain = confirm('Do you want to play again?');
	if(playAgain){
		console.log("\nAll right! Charging the game...\n");
		mainFunction(gameplayData.name);
	}else{
		console.log("Goodbye!");
	}
};

function mainFunction(name = ""){

	var nameOfUser;
	// chequeo si me llega el parámetro "name" en la función. Si es así, es un jugador que viene de una partida anterior.
	if(name == ""){
		// obtengo el nombre del usuario y le doy la bienvenida
		nameOfUser = obtainName();
	}else{
		nameOfUser = name;
	}

	// Genero un nuevo cartón
	var card = generateCard();

	// establezco una instancia de objeto con todos los parámetros del juego
	var gameplayData = new GameplayData(nameOfUser, card);

	// Le muestro al usuario el cartón
	showCard(gameplayData);

	while(gameplayData.stillPlaying == true){
		// mientras el jugador quiera seguir jugando y mientras no se haya cantado bingo...
		gameplayData = askOneMoreTurn(gameplayData);
		showCard(gameplayData);
		gameplayData = checkSingedLine(gameplayData);
		gameplayData = checkSingedBingo(gameplayData);
	}
}


mainFunction();


