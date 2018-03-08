import React, {Component} from 'react';

import List from './List';
import Register from './Register';
//import Services from './Services';
//import Service_selected from './Service_selected';
import Error_404 from './Error_404';


import { Switch, Route, withRouter } from 'react-router-dom';

class Main extends Component {
	constructor(){
		super();
		this.state = {
		}
	}

	handlerSuccefullApiResponse = (value) => {
		this.props.history.push("/");// Hago un redirect
	}

	render(){
		return (
			<main className="">
				<Switch>
					<Route exact path='/' component={List} />
					<Route path='/register' render={ () => <Register onSuccefullApiResponse={this.handlerSuccefullApiResponse} />} />
					{/*
					<Route exact path='/services' component={Services} />
					<Route path='/services/:value_selected' component={Service_selected} />
				*/}
					<Route component={Error_404} />
				</Switch>
			</main>
		);
	}
}

export default withRouter(Main);// Fíjate que esto e importar 'withRouter' me permiten hacer redirect

/**
 * He importo 'Switch' y 'Router'
 * Observa que mostraré un u otro componente dependiendo de la URL
 * Fíjate que el de 'List' he añadido la palabra 'exact'
 * Observa también el último 'Route', es una página 404. Por si ninguno de los parametros anteriores es válido
 */