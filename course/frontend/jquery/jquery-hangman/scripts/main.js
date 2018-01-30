"use strict";

$(document).ready(function() {

	var game;

	$('#submit_ready').on('click', function(event) {
		event.preventDefault();

		// Realizo el intercambio de secciones
		$(event.target).closest('section').hide(500);
		$('#pre_game_section').show();
	});


	(function() {
		/* Controlaré que me introducen una palabra, ya que el jQuery está evitando que la propiedad "required" del elemento input funcione correctamente. */
	    $('#word').keyup(function() {

	        var empty = false;
	        $('#word').each(function() {
	            if ($(this).val() == '') {
	                empty = true;
	            }
	        });

	        if (empty) {
	            $('#submit_pre_game').attr('disabled', 'disabled');
	        } else {
	            $('#submit_pre_game').removeAttr('disabled');
	        }
	    });
	})()



	$('#submit_pre_game').on('click', function(event) {
		event.preventDefault();

		// recojo la palabra y el número máximo de intentos permitidos
		var valueOfWord = $('#word').val();
		var valueOfAttemps = $('input[name="attemps"]').val();

		if(valueOfAttemps < 5 ){
			valueOfAttemps = 5;
		}
		if(valueOfAttemps > 20){
			valueOfAttemps = 20;
		}

		// inicializo el juego!
		game = new Hangman(valueOfWord, valueOfAttemps);

		// Realizo el intercambio de secciones
		$(event.target).closest('section').hide(500);
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



	(function() {
		/* Controlaré que me introducen una palabra, ya que el jQuery está evitando que la propiedad "required" del elemento input funcione correctamente. */
	    $('#try').keyup(function() {

	        var empty = false;
	        $('#try').each(function() {
	            if ($(this).val() == '') {
	                empty = true;
	            }
	        });

	        if (empty) {
	            $('#submit_try').attr('disabled', 'disabled');
	        } else {
	            $('#submit_try').removeAttr('disabled');
	        }
	    });
	})()


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
		$('#post_game_section').hide(500);
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
				$('#game_section').hide(500);
				$('#result').text(arr[1]);
				$('#post_game_section').show();
				break;

			case "WIN":
				$('#game_section').hide(500);
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

