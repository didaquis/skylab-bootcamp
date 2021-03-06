import React from 'react';

import Home from './Home';
import About from './About';
import Services from './Services';
import Service_selected from './Service_selected';
import Error_404 from './Error_404';

import { Switch, Route } from 'react-router-dom';

function Main(props) {
	return (
		<main className="py-5">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route exact path='/services' component={Services} />
				<Route path='/services/:value_selected' component={Service_selected} />
				<Route component={Error_404} />
			</Switch>
		</main>
	);
}

export default Main;

/**
 * He importo 'Switch' y 'Router'
 * Observa que mostraré un u otro componente dependiendo de la URL
 * Fíjate que el de 'Home' he añadido la palabra 'exact'
 * Observa también el último 'Route', es una página 404. Por si ninguno de los parametros anteriores es válido
 */