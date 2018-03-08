import React from 'react';


function UserDetails(props){
	return(
		<li className="media">
			<div className="media-body list-group-item">
				<h4 className="list-group-item-heading">{props.dataName} {props.dataSurname}</h4>
				<p className="list-group-item-text">Email: {props.dataEmail}</p>
				<p className="list-group-item-text">Username: {props.dataUsername}</p>
				<p className="list-group-item-text">Id: {props.dataId}</p>
				{/*	<a className="m-2 text-primary" href="#"><i className="far fa-edit"></i></a>*/}	
				<button className="text-danger mt-2" onClick={() => props.onClick(props.dataId)}><i className="far fa-trash-alt"></i></button>
			</div>
		</li>
	);
}

export default UserDetails;