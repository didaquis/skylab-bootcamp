$(document).ready(function(){

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
			timeout: 2000,
			success: function(result){
				var json = JSON.parse(JSON.stringify(result));
				showResults(json);
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
		var element = $(this);
		
		var query = element.data("id"); // recojo el valor del atributo "data-id" que hay en el elemento "li".
		var urlOfPetition = "http://quiet-inlet-67115.herokuapp.com/api/beer/" + query;
		// Ajax:
		$.ajax({
			url: urlOfPetition,
			dataType: "json",
			timeout: 2000,
			success: function(result){
				var json = JSON.parse(JSON.stringify(result));
				showDetails(json);
			},
			error: function (req, text, error) {
				alert(error);
			}
		});
	}))


	function showDetails(result){
		// Preparo la información a mostrar:
		textForModal = '<dl>';
		textForModal += '<dd>ID</dd>';
		textForModal += '<dt class="mb-4">' + result['id'] + '</dt>';
		textForModal += '<dd>Name</dd>';
		textForModal += '<dt class="mb-4">' + result['name'] + '</dt>';
		if(result['description'] !== undefined){
			textForModal += '<dd>Description</dd>';
			textForModal += '<dt class="mb-4">' + result['description'] + '</dt>';
		}
		textForModal += '</dl>';

		// Establezco la información a mostrar dentro de un modal
		$("#detailsModalLabel").html(result['name']);
		$("#detailsModalBody").html(textForModal);

		// Mostramos un modal
		$('#detailsModal').modal();
	}

});
