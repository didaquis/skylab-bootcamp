
/**
 *  NOTA: No funcionará si no arrancas un servicio http.
 */

$(document).ready(function(){

	$("button").click(function(){

		// Ajax:
		$.ajax({
			url: "files_to_serve/students.json",
			//async: false,
			success: function(result){
				console.table(result);

				showResults(result);
				//$("#result").html(result);
			},
			 error: function (req, text, error) {
				alert(error);
			}
		});


	});


	function showResults(result){
		$("#result").html(JSON.stringify(result));
	}


});