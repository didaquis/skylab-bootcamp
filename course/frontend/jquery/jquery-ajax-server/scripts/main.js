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




/**
 * Considera este ejemplo.
 * 
 * Si en el index hubiera un formulario con un input, podríamos buscar entre los datos.
 *
 */

/*
$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();

    $.ajax({
        url: "data/staff.json",
        success: function (result) {
            console.log(result);

            var list = '';

            var filtered = result.filter(function(v) {
                return v.name.indexOf(query) !== -1;
            })
        
            filtered.forEach(function(v) {
                list += v.name + ', '; 
            });

            $("#box").html(list);
        }
    });
});
*/


