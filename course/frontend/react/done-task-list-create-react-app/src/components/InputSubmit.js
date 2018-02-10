import React from 'react';

class InputSubmit extends React.Component {
	constructor() {
		super();

		this.state = { inputNewTask: '' }
	}

	focusOnInputField = (input) => {
  		input.focus();
	}

	_handlerOnChange = (e) => {
		this.setState({ inputNewTask: e.target.value })
	}

	_handlerOnSubmit = (e) => {
		e.preventDefault();

		const valueOfInputTrimed = this.state.inputNewTask.trim();
		if(valueOfInputTrimed.length > 0){
			this.props.onSubmit( valueOfInputTrimed );
		}
		this.setState({ inputNewTask: '' })
	}


	render (){
		return (
			<form onSubmit={this._handlerOnSubmit}>
				<input 
					type="text" 
					className="form-control add-todo" 
					placeholder={this.props.placeholder} 
					name="inputNewTask" 
					required 
					autoFocus 
					onChange={this._handlerOnChange} 
					value={this.state.inputNewTask} 
					ref={this.focusOnInputField} 
				/>
			</form>
		);
	}
}

export default InputSubmit;