$( "form" ).submit(function( event ) {
	event.preventDefault();

	var textOfTask = $('#task').val();

  	$('#task').focus();
  	$('#task').val('');

	$("ul").append('<li>' + textOfTask + ' | <a> 🗑️ </a>' + '</li>');

});

$("body").click( function(event){
    if(event.target.tagName.toLowerCase() === 'a'){
    	event.target.parentNode.remove();
    }
} );