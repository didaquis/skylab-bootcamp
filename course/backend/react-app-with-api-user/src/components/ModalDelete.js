import React from 'react';

import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ModalDelete extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
			idOfUser: '',
			inputUsername: '',
			inputPassword: ''
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.idOfUser !== ''){
			this.setState({ idOfUser: nextProps.idOfUser });
			this.handleShow();
		}
	}

	fillInput = (input) => {
		if(input.id === 'inputUsername'){
			this.setState({ inputUsername: input.value })
		}
		if(input.id === 'inputPassword'){
			this.setState({ inputPassword: input.value })
		}
	}

	render() {
		return (
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4 className="mb-4">If yow wish delete user, complete the form</h4>
					<form className="" onSubmit={(e) => { e.preventDefault(); this.handlerSubmit() }}>
						<div className="form-group">
							<label htmlFor="inputUsername" className="sr-only">Username</label>
							<input type="text" id="inputUsername" className="form-control" placeholder="Username" required pattern="^[a-zA-Z0-9]{6,18}$" onChange={e => this.fillInput(e.target)} value={this.state.inputUsername} />
							<small id="emailHelp" className="form-text text-muted">Min 6 chars. Max 18 chars. You can use minus chars, mayus chars and numbers.</small>
						</div>

						<div className="form-group">
							<label htmlFor="inputPassword" className="sr-only">Password</label>
							<input type="password" id="inputPassword" className="form-control" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onChange={e => this.fillInput(e.target)} value={this.state.inputPassword} />
							<small id="emailHelp" className="form-text text-muted">At least of 8 chars. Must include minus chars, mayus chars and numbers.</small>
						</div>
						<button className="btn btn-lg btn-danger btn-block" type="submit">Delete user!</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<button type="button" className="btn btn-primary" onClick={this.handleClose}>Close</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ModalDelete;
