import React from 'react';

import { NavLink } from 'react-router-dom';

function Nav(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink to='/' className="navbar-brand">Users Management App</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
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