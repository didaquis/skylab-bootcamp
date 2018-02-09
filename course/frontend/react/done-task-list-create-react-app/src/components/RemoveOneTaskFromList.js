import React from 'react';

function RemoveOneTaskFromList(props){
	return (
		<button onClick={ (e) => { e.preventDefault(); props.onClick() } } className="remove-item btn btn-default btn-xs pull-right">
			<span className="glyphicon glyphicon-remove"></span>
		</button>
	);
}

export default RemoveOneTaskFromList;