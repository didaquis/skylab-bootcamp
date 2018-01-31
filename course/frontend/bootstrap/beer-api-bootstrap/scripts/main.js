$(document).ready(function(){
	"use strict";

	(function() {
		/* Controlaré que me introducen una palabra, ya que el jQuery está evitando que la propiedad "required" del elemento input funcione correctamente. */
		$('#input_beer').keyup(function() {

			var empty = false;
			$('#input_beer').each(function() {
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

	$('#search_button').on('click', function(e) {
		e.preventDefault();

		var query = $('#input_beer').val();
		var urlOfPetition = "http://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query;
		// Ajax:
		$.ajax({
			url: urlOfPetition,
			dataType: "json",
			timeout: 3000,
			success: function(beersOnJSON){
				showResults(beersOnJSON);
			},
			error: function (req, text, error) {
				alert(error);
			}
		});
	})

	function showResults(result){
		var toPrint = '<ul id="list_example" class="list-group">';
		for(var prop in result){
			toPrint += "<li class='list-group-item list-group-item-action' data-id='" + result[prop].id + "'>" + result[prop].name + "</li>";
		}
		toPrint += '</ul>';
		$("#list_of_results").html(toPrint);
	}

	$("body").on("click", "li", (function(e) {
		var $li = $(this);
		
		var id = $li.data("id"); // recojo el valor del atributo "data-id" que hay en el elemento "li".
		var urlOfPetition = "http://quiet-inlet-67115.herokuapp.com/api/beer/" + id;
		// Ajax:
		$.ajax({
			url: urlOfPetition,
			dataType: "json",
			timeout: 3000,
			success: function(beerDetailsOnJSON){
				showDetails(beerDetailsOnJSON);
			},
			error: function (req, text, error) {
				alert(error);
			}
		});
	}))


	function showDetails(beer){
		// Preparo la información a mostrar:
		var textForModal = '<dl>';
		textForModal += '<dd>ID</dd>';
		textForModal += '<dt class="mb-4">' + beer['id'] + '</dt>';
		textForModal += '<dd>Name</dd>';
		textForModal += '<dt class="mb-4">' + beer['name'] + '</dt>';
		if(beer['description'] !== undefined){
			textForModal += '<dd>Description</dd>';
			textForModal += '<dt class="mb-4">' + beer['description'] + '</dt>';
		}
		textForModal += '</dl>';

		// Establezco la información a mostrar dentro de un modal
		$("#detailsModalLabel").html(beer['name']);
		$("#detailsModalBody").html(textForModal);

		// Mostramos un modal
		$('#detailsModal').modal();
	}

});
