import React from 'react';

import { Link } from 'react-router-dom';

function Services(props) {

	const textOne = 'ExampleOne';
	const textTwo = 'Exampletwo';

	return (
		<main className="py-5">
			<div className="container">
				<h1>Services</h1>
				<h2>Prueba a escribir una url como esta: <span className="text-info">/services/ejemplo</span></h2>
				<h2>O pulsa en alguno de estos enlaces:</h2>
				<Link to={`/services/${textOne}`}>Link One</Link>
				<br />
				<Link to={`/services/${textTwo}`}>Link Two</Link>
				<br />
				<Link to="/services/textThree">Link Three</Link>
			</div>
		</main>
	);
}

export default Services;

/**
 * Observa como he creado enlaces! Esto funciona gracias al código que hay en 'Main.js'
 */