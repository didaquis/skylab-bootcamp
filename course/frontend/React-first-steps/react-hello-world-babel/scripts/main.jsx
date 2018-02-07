'use strict';

/* React + Babel (necesitas ejecutar un servidor para ver el resultado!) */


function salute(){
	alert('hi!');
}

const text = 'Hello World with React + Babel';

ReactDOM.render(
	<header>
		<h1>{text}</h1>
		{/* Esto es un comentario */}
		<button className="round-red-button" onClick={salute} >Salute</button>
	</header>,
	document.getElementById('root'))