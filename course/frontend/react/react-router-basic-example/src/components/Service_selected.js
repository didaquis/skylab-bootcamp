import React from 'react';

function Service_selected (props){

	if(!props.match.params.value_selected){
		return (
			<main className="py-5">
				<div className="container">
					<section className="py-5">
						<div className="container">
							<h1>Error: info not found</h1>
						</div>
					</section>
				</div>
			</main>
		)
	}

	return (
		<main className="py-5">
			<div className="container">
				<section className="py-5">
					<div className="container">
						<h1>Service_selected => {props.match.params.value_selected}</h1>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Service_selected;