import React from 'react';

function UserDetails(props){
	return(
		<li className="media mb-2 mt-5">
			<div className="media-body">
				<h5 className="mt-0 mb-1">{props.dataName} {props.dataSurname}</h5>
				<p>Email: {props.dataEmail}</p>
				<p>Username: {props.dataUsername}</p>
				<p>Id: {props.dataId}</p>
				<a className="m-2 text-primary" href="#"><i className="far fa-edit"></i></a>
				<a className="m-2 text-danger" href="#"><i className="far fa-trash-alt"></i></a>
			</div>
		</li>
	);
}

export default UserDetails;