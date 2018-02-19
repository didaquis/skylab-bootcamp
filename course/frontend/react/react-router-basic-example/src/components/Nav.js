import React from 'react';

import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	  		<div className="container">
				<Link to='/' className="navbar-brand">Start Bootstrap</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		  			<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
		  			<ul className="navbar-nav ml-auto">
						<li className="nav-item">
			  				<Link to='/' className="nav-link">Home</Link>
						</li>
						<li className="nav-item">
			  				<Link to='/about' className="nav-link">About</Link>
						</li>
						<li className="nav-item">
			  				<Link to='/services' className="nav-link">Services</Link>
						</li>
		  			</ul>
				</div>
	  		</div>
		</nav>
	);
}

export default Nav;

/**
 * Importo 'Link'
 * Sustituyo todos las etiquetas html 'a' por componentes 'Link'
 * Observa que cada uno de estos componentes 'Link' tiene un atributo llamado 'to' 
 * En esos atributos 'to', pondré el valor de la URL a la que quiero que apunte cada uno de ellos
 * Esos componentes no deben de llevar el atributo 'href'
 */