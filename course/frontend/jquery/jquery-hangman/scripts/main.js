$(document).ready(function() {

	var game;

	$('#submit_ready').on('click', function(event) {
		event.preventDefault();

		// Realizo el intercambio de secciones
		$(event.target).closest('section').hide();
		$('#pre_game_section').show();
	});



	$('#submit_pre_game').on('click', function(event) {
		event.preventDefault();

		// recojo la palabra y el número máximo de intentos permitidos
		var valueOfWord = $('input[name="word"]').val();
		var valueOfAttemps = $('input[name="attemps"]').val();

		// inicializo el juego!
		game = new Hangman(valueOfWord, valueOfAttemps);

		// Realizo el intercambio de secciones
		$(event.target).closest('section').hide();
		$('#game_section').show();

		// Pongo el foco en el campo adecuado
		$('input[name="try"]').focus();

	});


	$('#submit_try').on('click', function(event) {
		event.preventDefault();

		// recupero el valor del input
		var valueOfTry = $('input[name="try"]').val();

		// reseteo el campo
		$('input[name="try"]').val('');

		var resultOfAttemp = game.try(valueOfTry);

		// muestro los resultados
		showGameData(resultOfAttemp);
	});

	function showGameData(source){
		alert(source);
		var numOfAttempsRemaining = 0;
		var underscoredWord = 'Nyancat';
		$('#num_of_attemps').text(numOfAttempsRemaining);
		$('#board').text(underscoredWord);
	}

});