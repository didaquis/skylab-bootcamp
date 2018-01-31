$(document).ready(function(){

	"use strict";

	(function() {
		/* Controlaré que me introducen una palabra, ya que el jQuery está evitando que la propiedad "required" del elemento input funcione correctamente. */
		$('#input_search').keyup(function() {

			var empty = false;
			$('#input_search').each(function() {
				if ($(this).val() == '') {
					empty = true;
				}
			});

			if (empty) {
				$('#search_button').attr('disabled', 'disabled');
			} else {
				$('#search_button').removeAttr('disabled');
			}
		});
	})()


	/* Detectamos el envío del formulario y realizamos una petición de búsqueda de artista */
	$('#search_button').on('click', function(e) {
		e.preventDefault();
		var artistToFind = $('#input_search').val();
		spotifyApi.searchArtists(artistToFind, showResults, alert);
	})


	function showResults(result){
		var toPrint = '';
		for(var prop in result){
			toPrint += "<div class='card mb-3' data-id='" + result[prop].id + "'>";
			toPrint += "<div class='card-body'>";
			toPrint += "<h5 class='card-title'>"+ result[prop].name +"</h5>";
			toPrint += "</div>";
			// Voy a comprobar si hay disponible una fotografía
			if(result[prop].images.length > 0){
				toPrint += "<img class='card-img-bottom' src='"+ result[prop].images[0]['url'] +"' alt='Card image cap'>";
			}
			toPrint += "</div>";
		}

		$("#listOfArtist").html(toPrint);
	}


});
