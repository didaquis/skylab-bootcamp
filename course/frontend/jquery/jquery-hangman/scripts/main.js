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
		var valueOfWord = $('#word').val();
		var valueOfAttemps = $('input[name="attemps"]').val();

		// inicializo el juego!
		game = new Hangman(valueOfWord, valueOfAttemps);

		// Realizo el intercambio de secciones
		$(event.target).closest('section').hide();
		$('#game_section').show();

		// Pongo el foco en el campo adecuado
		$('input[name="try"]').focus();


		// Actualizo el board del juego
		var initialUnderscores = '';
		for(var i = 0; i < valueOfWord.length; i++) {
			initialUnderscores += '_';
		}
		logicOfRespose(['PLAYING', valueOfAttemps, initialUnderscores]);
	});


	$('#submit_try').on('click', function(event) {
		event.preventDefault();

		var inputTry = $('input[name="try"]');

		// recupero el valor del input
		var valueOfTry = inputTry.val();

		// reseteo el campo
		inputTry.val('');
		inputTry.focus();


		// lanzamos la jugada
		var resultOfAttemp = game.try(valueOfTry);

		logicOfRespose(resultOfAttemp);
	});

	$('#submit_play_again').on('click', function(event) {
		event.preventDefault();

		// Realizo el intercambio de secciones
		$('#post_game_section').hide();
		$('#pre_game_section').show();

		// reseteo los campos adecuados
		var inputWord = $('#word');
		inputWord.val('');
		inputWord.focus();
		$('#attemps').val(10)

	});

	function logicOfRespose(arr){
		switch (arr[0]) {
			case "GAME OVER":
				$('#game_section').hide();
				$('#result').text(arr[1]);
				$('#post_game_section').show();
				break;

			case "WIN":
				$('#game_section').hide();
				$('#result').text(arr[1]);
				$('#post_game_section').show();
				break;

			case "PLAYING":
				// actualizo el board
				updateGameData(arr[1], arr[2]);
				break;
		}
	}

	function updateGameData(numOfAttempsRemaining, underscoredWord){
		$('#num_of_attemps').text(numOfAttempsRemaining);
		$('#underscoredWord').text(underscoredWord);
	}

});


/**
 * # TO-DO
 * 		
 * * Modificar el Hangman:
 * 		* volver privados los métodos "updateUnderscoreToPrint" y "initGame"
 *
 *
 * * Implementar validaciones para los campos (número de intentos, por ejemplo)
 *
 */


