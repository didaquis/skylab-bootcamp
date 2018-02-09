import React from 'react';

function SuccessButton(props) {
	return (
		<button id="checkAll" className="btn btn-success" onClick={props.onPushButton}>{props.label}</button>
	);
}

export default SuccessButton;