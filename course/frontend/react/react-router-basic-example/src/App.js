import React, { Component } from 'react';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Nav />
					<Main />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

/**
 * He instalado "react-router-dom"
 * Observa que en mi 'index.html' estoy enlazando los estilos y los scripts poniendo '%PUBLIC_URL%/' al inicio de la URL!
 * Después he importado 'BrowserRouter' (Requisito: el server ha de poder responder peticiones dinámicas)
 * Abrazo toda mi app con el componente 'BrowserRouter'
 * Los dos últimos pasos los podría hacer también en 'index.js' abrazando al componente 'App'
 */
