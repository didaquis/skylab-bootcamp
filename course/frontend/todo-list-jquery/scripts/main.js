$( "form" ).submit(function( event ) {
	event.preventDefault();

	var textOfTask = $('input[name="task"]').val(); // observa que el selector está devolviendo un array. Sin embargo, al contener solo una posición me lo interpreta como un solo elemento y no como un conjunto de elementos.

	$('input[name="task"]').focus();
	$('input[name="task"]').val('');

	$("ul").append('<li>' + textOfTask + '<span>|</span><a>🗑️ </a>' + '</li>');
});

$("body").click(function(event){
	var target = $(event.target);
	if( target.is("a") ){
		target.parent().remove();
	}
});