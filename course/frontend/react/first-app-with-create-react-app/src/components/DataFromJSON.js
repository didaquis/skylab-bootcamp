import React from 'react';

/**
 * Ejemplo muy básico de como recuperar datos de un fichero JSON usando "axios"
 */

import axios from 'axios';


class DataFromJSON extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			items: []
		}

		axios.get('../utils/colors.json') 
			.then(res => {
				this.setState({ items: res.data });
			}
		);
	}



	render(){
		return (
			<section>
				<h2>Show data from 'colors.json' file</h2>
				{this.state.items.map(function(object) {
					return (
					  <p key={object.color}>{object.color} - {object.value}</p>
					);
				})}
			</section>
		)
	}
}

export default DataFromJSON;