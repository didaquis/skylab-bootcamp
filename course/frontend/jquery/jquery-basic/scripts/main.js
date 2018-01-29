
// Usamos jQuery

$('.box').addClass('caja');


var $box1 = $('#box-1');

$box1.click(function(e) {
	$box1.toggleClass("highlight");
});


// ****************************************************************


// # jQuery basic examples
/**

	// Al cargar la página...
	$(document).ready(function() {

		// crear un nuevo nodo:
		var nuevoElemento = $('<p>From $399.99</p>');

		// añadir el nuevo elemento inmediatamente después de otro (también puedes usar: before, prepend (dentro al inicio), append (dentro al final), según convenga):
		$("#selector").after(nuevoElemento);

		// si quieres quitar un elemento, usa "remove".
		// el método "find" también es interesante, te permite buscar elementos.
		// También es interesante el "appendTo" que sustituye el elemento objetivo por el que quieres añadir

	});

*/


/**

	// Reaccionar ante un click:
	$('#button').on('click', function(){
		// your code...

		// El selector para el elemento clicado es "$(this)".
		// Si queremos seleccionar al padre, podemos usar:  "$(this).closest('.clase-del-padre')"
	});

	// Veamos un ejemplo:
	$(document).ready(function() {
		$('button').on('click', function() {
			// cuando detecta "click" sobre cualquier botón de la página...
			var message = $('<span>Call 1-555-jquery-air to book this tour</span>'); // creo un elemento nuevo
			$(this).closest('.tour').append(message); // busco a su padre, y le añado al final el nuevo elemento
			$(this).remove(); // quito el botón al que le han hecho click
		});
	});

*/
