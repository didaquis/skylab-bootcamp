$(document).ready(function(){

	$("button").click(function(){


		$.ajax({
			url: "http://weather.tuxnet24.de/?id=775249",
			//async: false,
			success: function(result){
				console.log(result);
				$("#result").html(result);
			},
			 error: function (req, text, error) {
				alert(error);
			}
		});



	});

});