/* Helpers: */
var d = document;
var qs = document.querySelector.bind(document); // fíjate en el "bind()"

/* Save new task */
document.getElementsByTagName('form')[0].addEventListener('submit', function(event){

	event.preventDefault(); // evito que el formulario sea enviado

	var inputElement = qs('input[type="text"]'); // selecciono el elemento
	var textOfTask = inputElement.value;

	addNewTask(textOfTask);

	removeValueOfInput(inputElement);

	setFocusOnInput(inputElement);
});

/* Detect click on anywhere (event bubbling) */
d.addEventListener('click', function(event){
	// capturamos TODOS los clicks en el documento
	if(event.target.tagName.toLowerCase() === 'a'){
		// si el click se realiza sobre una tag de tipo 'a', es decir un enlace (<a href=""></a>).
		// Los elementos de tipo HTML tag, suelen ser retornados en mayúsculas, por eso he añadido el método "toLowerCase()".

		removeTask(event.target.parentNode);
	} ;
});

function addNewTask(textOfTask){
	var containerOfTask = qs('ul');

	// creo un task nuevo
	var task = d.createElement('li');
	var taskContent = d.createTextNode(textOfTask);
	task.appendChild(taskContent);

	// creo el enlace que me permitirá borrar el task
	var confirm = d.createElement('a');
	confirm.innerText = ' 🗑️ ';
	task.appendChild(confirm);

	// agrego a la lista de task la nueva task
	containerOfTask.appendChild(task);
}

function removeValueOfInput(input){
	input.value = '';
}

function setFocusOnInput(input){
	input.focus();
}

function removeTask(taskToRemove){
	// quito del dom la tarea
	taskToRemove.remove();
}