/**
 *  NOTA: No funcionará si no arrancas un servicio http!
 */

$(document).ready(function(){

	$("button").click(function(){

		// Ajax:
		$.ajax({
			url: "files_to_serve/students.json",
			dataType: "json",
			success: function(result){
				var json = JSON.parse(JSON.stringify(result));
				showResults(json);
			},
			 error: function (req, text, error) {
				alert(error);
			}
		});

	});


	function showResults(result){
		var toPrint = "<ul>";
		for(var prop in result){
			toPrint += "<li>" + result[prop].name + " " + result[prop].surname + "</li>";
		}
		toPrint += "</ul>";
		$("#result").html(toPrint);
	}

});