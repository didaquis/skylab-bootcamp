import React from 'react';

import { NavLink } from 'react-router-dom';

function Nav(props) {
	return (
		<div className="mb-8">
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<NavLink to='/' className="navbar-brand">Users Management App</NavLink>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<NavLink exact to='/' activeClassName='active' className="nav-link">List</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/register' activeClassName='active' className="nav-link">Register</NavLink>
							</li>
							{/*<li className="nav-item">
								<NavLink to='/services' activeClassName='active' className="nav-link">Services</NavLink>
							</li>*/}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;

/**
 * Importo 'NavLink'
 * Sustituyo todos las etiquetas html 'a' por componentes 'NavLink'
 * Observa que cada uno de estos componentes 'NavLink' tiene un atributo llamado 'to' 
 * En esos atributos 'to', pondré el valor de la URL a la que quiero que apunte cada uno de ellos
 * Esos componentes no deben de llevar el atributo 'href'
 * Fíjate que puedo especificar una clase css que ese elemento heredará si la url coincide con la del elemento
 * Es clase la defines con el parámetro 'activeClassName'
 */