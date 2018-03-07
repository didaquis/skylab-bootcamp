import React, {Component} from 'react';

import List from './List';
import Register from './Register';
//import Services from './Services';
//import Service_selected from './Service_selected';
import Error_404 from './Error_404';
import ModalToInform from './ModalToInform';

import { Switch, Route } from 'react-router-dom';

class Main extends Component {
	constructor(){
		super();
		this.state = {
			showModalToInform: false,
			textForTitleModal: '',
			textForBodyModal: ''
		}
	}

	handlerSuccefullApiResponse = (value) => {
		this.setState({textForTitleModal:value, showModalToInform:true});
	}

	render(){
		return (
			<main className="py-5">
				<ModalToInform textForTitle={this.state.textForTitleModal} textForBody={this.state.textForBodyModal} />
				<Switch>
					{/*
					<Route exact path='/' render={() => <List onSuccefullApiResponse={this.handlerSuccefullApiResponse} />} />
				*/}
				
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

export default Main;

/**
 * He importo 'Switch' y 'Router'
 * Observa que mostraré un u otro componente dependiendo de la URL
 * Fíjate que el de 'Home' he añadido la palabra 'exact'
 * Observa también el último 'Route', es una página 404. Por si ninguno de los parametros anteriores es válido
 */