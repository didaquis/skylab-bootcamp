/* Declaramos una función que nos ayudará a optimizar la escritura del código */
function $(idOfElement) {
	return document.getElementById(idOfElement);
};

/* Declaramos unas funciones para trabajar con "local Storage" */
function saveOnLocalStorage(name, data) {
	localStorage.setItem(name, JSON.stringify(data));
}

function recoverFromLocalStorage(name) {
	return JSON.parse(localStorage.getItem(name));
}

function deleteLocalStorage() {
	localStorage.clear();
}

/* Funciones para colorear los círculos */
function resetColorOnCircles() {
	var hitsElements = document.getElementsByClassName("hits");
	var errorElements = document.getElementsByClassName("error");
	while (hitsElements[0]) {
		hitsElements[0].classList.remove("hits");
	}
	while (errorElements[0]) {
		errorElements[0].classList.remove("error");
	}
}

function setColorOnCircle(circle, color) {
	if (color == "hits") {
		$(circle).classList.add("hits");
	} else {
		$(circle).classList.add("error");
	}
}

/* funciones para mostrar y ocultar los modales */
function displayNameModal() {
	window.setTimeout(function() {
		$("name").focus();
	}, 0); // Sin este hack el "focus" no funcionará!

	$("name").value = "";

	$("name").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.key === "Enter") {
			$("nameConfirm").click();
		}
	});

	$("nameModal").style.display = "block";
}

function displayModalOfQuestion(nextQuestion) {
	var gameplayData = recoverFromLocalStorage("gameplayData");

	for (var i = 0; i < gameplayData.questions.length; i++) {
		if (gameplayData.questions[i].id == nextQuestion) {
			$("question").innerHTML = gameplayData.questions[i].question;
			$("input_answer").value = "";
			$("input_question").value = gameplayData.questions[i].id;
		}
	}

	window.setTimeout(function() {
		$("input_answer").focus();
	}, 0); // Sin este hack el "focus" no funcionará!

	$("questionModal").style.display = "block";
}

function hideModal(modalToHide) {
	$(modalToHide).style.display = "none";
}

function startGame() {
	// pongo en marcha el cronómetro!
	chronoStop();
	chronoReset();
	chronoStart();

	// lanzo las preguntas
	throwQuestion();
}

function init() {
	resetColorOnCircles();
	chronoStop();
	chronoReset();
	var gameplayData = new GameplayData();

	if (!recoverFromLocalStorage(rankingData)) {
		// si no existe el ranking, lo inicializo
		var rankingData = [];
		saveOnLocalStorage("rankingData", rankingData);
	}

	saveOnLocalStorage("gameplayData", gameplayData);

	window.setTimeout(displayNameModal, 1000);
}

function checkNameOfPlayer(name) {
	if (name == null || name == "") {
		$("name").value = "jugador anonimo";
	}
	hideModal("nameModal");

	var gameplayData = recoverFromLocalStorage("gameplayData");
	gameplayData.nameOfUser = $("name").value;
	saveOnLocalStorage("gameplayData", gameplayData);

	startGame();
}

function userEndsGame() {
	chronoStop();
	chronoReset();
	resetColorOnCircles();
	hideModal("questionModal");
}

function userSaidPasapalabra() {
	hideModal("questionModal");
	obtainNextQuestionToAsk();
	updateStatusOfGame();
}

function userAskQuestion(input_question, input_answer) {
	hideModal("questionModal");
	checkAnswerOfUser(input_question, input_answer);
}

function checkAnswerOfUser(input_question, input_answer) {
	var gameplayData = recoverFromLocalStorage("gameplayData");

	for (var i = 0; i < gameplayData.questions.length; i++) {
		if (gameplayData.questions[i].id == input_question) {
			// chequeo si la respuesta es correcta
			if (input_answer == gameplayData.questions[i].answer) {
				gameplayData.hits++;
				setColorOnCircle(
					"letter_" + gameplayData.questions[i].letter,
					"hits"
				);
			} else {
				gameplayData.errors++;
				setColorOnCircle(
					"letter_" + gameplayData.questions[i].letter,
					"error"
				);
			}

			gameplayData.numberOfTurns++;
			gameplayData.questions[i].status = 1;
			saveOnLocalStorage("gameplayData", gameplayData);
			obtainNextQuestionToAsk();
			break;
		}
	}

	updateStatusOfGame();
}

function obtainNextQuestionToAsk() {
	var gameplayData = recoverFromLocalStorage("gameplayData");

	// Obtengo el listado de preguntas que el jugador aún no ha respondido
	var listOfNextQuestions = gameplayData.questions.filter(function(
		obj_question
	) {
		return obj_question.status == 0;
	});

	if (listOfNextQuestions.length != 0) {

		for (var i = 0; i < listOfNextQuestions.length; i++) {
			if (listOfNextQuestions[i].id > gameplayData.nextQuestion) {
				gameplayData.nextQuestion = listOfNextQuestions[i].id;
				break;
			}
		}

		if (gameplayData.nextQuestion > listOfNextQuestions[listOfNextQuestions.length - 1].id) {
			gameplayData.nextQuestion = listOfNextQuestions[0].id;
		}

		// Establezco la siguiente pregunta que deberá responder el jugador.
		saveOnLocalStorage("gameplayData", gameplayData);
	}
}

function throwQuestion() {
	var gameplayData = recoverFromLocalStorage("gameplayData");
	displayModalOfQuestion(gameplayData.nextQuestion);
}

function updateStatusOfGame() {
	/* Comprobamos si todas las preguntas han sido respondidas. Si es así, el juego finalizará. Si no es así, seguimos jugando */
	var gameplayData = recoverFromLocalStorage("gameplayData");

	if (gameplayData.hits + gameplayData.errors == 27) {
		// todas las preguntas han sido respondidas
		saveOnLocalStorage("gameplayData", gameplayData);
		chronoStop();
		var timePlaying = $("chronotime").innerHTML;
		chronoReset();
		addDataToRanking(
			gameplayData.nameOfUser,
			gameplayData.hits,
			timePlaying
		);
	} else {
		window.setTimeout(throwQuestion, 10);
	}
}

function addDataToRanking(name, hits, time) {
	var rankingData = recoverFromLocalStorage("rankingData");
	var newRecord = { jugador: name, aciertos: hits, tiempo: time };
	rankingData.push(newRecord);
	saveOnLocalStorage("rankingData", rankingData);

	showRanking();
}

function showRanking() {
	var rankingData = recoverFromLocalStorage("rankingData");

	var rankingText = "";
	rankingText += "<br>============================<br>";
	rankingData.forEach(function(ranking) {
		rankingText += "Jugador => " + ranking.jugador + "<br>";
		rankingText += "Aciertos => " + ranking.aciertos + "<br>";
		rankingText += "Tiempo => " + ranking.tiempo + "<br>";
		rankingText += "============================<br>";
	});
	$("ranking").innerHTML += rankingText;
	$("ranking_section").style.display = "block";

	init();
}

function GameplayData(nameOfUser = "", hits = 0, errors = 0, numberOfTurns = 0, nextQuestion = 0) {
	this.nameOfUser = nameOfUser;
	this.hits = hits;
	this.errors = errors;
	this.numberOfTurns = numberOfTurns;
	this.nextQuestion = nextQuestion;
	this.questions = [
		{
			id: 0,
			letter: "a",
			answer: "abducir",
			status: 0,
			question:
				"CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
		},
		{
			id: 1,
			letter: "b",
			answer: "bingo",
			status: 0,
			question:
				"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
		},
		{
			id: 2,
			letter: "c",
			answer: "churumbel",
			status: 0,
			question: "CON LA C. Niño, crío, bebé"
		},
		{
			id: 3,
			letter: "d",
			answer: "diarrea",
			status: 0,
			question:
				"CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
		},
		{
			id: 4,
			letter: "e",
			answer: "ectoplasma",
			status: 0,
			question:
				"CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
		},
		{
			id: 5,
			letter: "f",
			answer: "facil",
			status: 0,
			question:
				"CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
		},
		{
			id: 6,
			letter: "g",
			answer: "galaxia",
			status: 0,
			question:
				"CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
		},
		{
			id: 7,
			letter: "h",
			answer: "harakiri",
			status: 0,
			question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
		},
		{
			id: 8,
			letter: "i",
			answer: "iglesia",
			status: 0,
			question: "CON LA I. Templo cristiano"
		},
		{
			id: 9,
			letter: "j",
			answer: "jabali",
			status: 0,
			question:
				"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
		},
		{
			id: 10,
			letter: "k",
			answer: "kamikaze",
			status: 0,
			question:
				"CON LA K. Persona que se juega la vida realizando una acción temeraria"
		},
		{
			id: 11,
			letter: "l",
			answer: "licantropo",
			status: 0,
			question: "CON LA L. Hombre lobo"
		},
		{
			id: 12,
			letter: "m",
			answer: "misantropo",
			status: 0,
			question:
				"CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
		},
		{
			id: 13,
			letter: "n",
			answer: "necedad",
			status: 0,
			question: "CON LA N. Demostración de poca inteligencia"
		},
		{
			id: 14,
			letter: "ñ",
			answer: "señal",
			status: 0,
			question:
				"CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
		},
		{
			id: 15,
			letter: "o",
			answer: "orco",
			status: 0,
			question:
				"CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
		},
		{
			id: 16,
			letter: "p",
			answer: "protoss",
			status: 0,
			question:
				"CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
		},
		{
			id: 17,
			letter: "q",
			answer: "queso",
			status: 0,
			question:
				"CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
		},
		{
			id: 18,
			letter: "r",
			answer: "raton",
			status: 0,
			question: "CON LA R. Roedor"
		},
		{
			id: 19,
			letter: "s",
			answer: "stackoverflow",
			status: 0,
			question:
				"CON LA S. Comunidad salvadora de todo desarrollador informático"
		},
		{
			id: 20,
			letter: "t",
			answer: "terminator",
			status: 0,
			question:
				"CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
		},
		{
			id: 21,
			letter: "u",
			answer: "unamuno",
			status: 0,
			question:
				"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
		},
		{
			id: 22,
			letter: "v",
			answer: "vikingos",
			status: 0,
			question:
				"CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
		},
		{
			id: 23,
			letter: "w",
			answer: "sandwich",
			status: 0,
			question:
				"CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
		},
		{
			id: 24,
			letter: "x",
			answer: "botox",
			status: 0,
			question:
				"CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
		},
		{
			id: 25,
			letter: "y",
			answer: "peyote",
			status: 0,
			question:
				"CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
		},
		{
			id: 26,
			letter: "z",
			answer: "zen",
			status: 0,
			question:
				"CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
		}
	];
}