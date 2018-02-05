/* React + Babel (necesitas ejecutar un servidor para ver el resultado!) */

'use strict';

let a, b, result;

function calculate(e){
	e.preventDefault();
	result = a + b;
	render(); /* Fíjate que React solo actualiza el input del resultado, no los otros! */
}

function keepA(e){
	a = parseFloat(e.target.value);
}

function keepB(e){
	b = parseFloat(e.target.value);
}


function render(){
	ReactDOM.render(
		<main>
			<form onSubmit={calculate}>
				<input type="number" onChange={keepA}/>
				 + 
				<input type="number" onChange={keepB}/>
				<button className="round-red-button">=</button>
				<input type="text" disabled value={result} />
			</form>
		</main>,
		document.getElementById('root')
	)
}

render();

