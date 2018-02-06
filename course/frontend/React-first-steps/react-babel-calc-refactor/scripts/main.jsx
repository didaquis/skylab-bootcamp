/* React + Babel (necesitas ejecutar un servidor para ver el resultado!) */

'use strict';

function HelloWorld(){
	/* Esto es un 'functional component' */
	return <h1>Hello, world!</h1>;
}

function Hello(props){
	return <h1>Hello {props.name} 😀</h1>;
}

class Calc extends React.Component {
	/* Si necesitamos que el componente maneje valores (cambios de state) tendremos que crearlo usando 'class' */
	constructor(){
		super();

		this.state = {
			a: 0,
			b: 0,
			res: 0
		}; /* De este modo establecemos valores por defecto a nuestros elementos del componente */
	};

	calculate = (e) => {
		e.preventDefault();

		this.setState({
			res: this.state.a + this.state.b
		});
	};

	/* Usamos arrow function para que this tenga el contexto adecuado */
	keepA = (e) => {
		this.setState({ a: parseFloat(e.target.value) });
	}

	/* Resolvemos la misma situación anterior usando 'bind' (lo encontrarás dentro del método render!) */
	keepB = function(e) {
		this.setState({ b: parseFloat(e.target.value) });
	}

	render(){
		return <form onSubmit={this.calculate}>
					<input type="number" onChange={this.keepA}/>
				 	+ 
					<input type="number" onChange={this.keepB.bind(this)}/>
					<button className="round-red-button">=</button>
					<input type="text" disabled value={this.state.res} />
				</form>
	}
}


function render(){
	ReactDOM.render(
		(<main>
			<section>
				<HelloWorld />
				<Hello name="John Doe" />
				<Calc />
			</section>
		</main>),
		document.getElementById('root')
	)
}

render();
