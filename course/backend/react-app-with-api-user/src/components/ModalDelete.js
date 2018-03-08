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
		  	idOfUser: ''
		};
  	}

  	handleClose() {
		this.setState({ show: false });
  	}

  	handleShow() {
		this.setState({ show: true });
  	}


  	componentWillReceiveProps(nextProps){
		//console.log('modal => componentWillReceiveProps');

		if(nextProps.idOfUser !==  this.state.idOfUser){
			this.setState({ idOfUser: this.props.idOfUser, show:true });
		}
		//this.setState({ idOfUser: this.props.idOfUser});
		console.log('valor idOfUser (componentWillReceiveProps) => ' + this.state.idOfUser);
		//if(this.state.idOfUser !== ''){
			//this.setState({ show:true });
		//}
	}

	componentDidMount(){
		//console.log('modal => componentDidMount')
	}

	componentWillUpdate(){
		// Se ejecuta cada vez que el Modal se muestra y se oculta
		//console.log('modal => componentWillUpdate');
		console.log('valor idOfUser (componentWillUpdate) => ' + this.state.idOfUser);
		if(this.state.idOfUser !== ''){
			//console.log('peticion a la api')
		}
	}

  	render() {
		return (
	  		<div>
				<Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
		  			Launch demo modal
				</Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
		  			<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
		  			</Modal.Header>
			  		<Modal.Body>
						<h4>Text in a modal</h4>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
			  		</Modal.Body>
			  		<Modal.Footer>
						<Button onClick={this.handleClose}>Close</Button>
		  			</Modal.Footer>
				</Modal>
	  		</div>
		);
  	}
}

export default ModalDelete;


/*

<!-- Button trigger modal -->

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalDelete">
  Launch demo modal
</button>


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})


$('#myModal').modal(options)
Options => https://getbootstrap.com/docs/4.0/components/modal/#options

$('#myModal').modal('toggle')

$('#myModal').modal('show')

$('#myModal').modal('hide')

Eventos => https://getbootstrap.com/docs/4.0/components/modal/#events

$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})

 */


/*
class ModalDelete extends Component {
	constructor(){
		super();

		this.state = {
			inputUsername:"",
			inputPassword: ""
		};
	}

	componentWillReceiveProps(nextProps){
		console.log('modal => componentWillReceiveProps')
		
	}

	componentDidMount(){
		console.log('modal => componentDidMount')
		//$(this.getDOMNode()).modal('show');
	}

	handlerSubmit = () => {
		console.log('submit modal')
		//$('#modalDelete').modal('hide')
	}

	fillInput = (input) => {
		if(input.id === 'inputUsername'){
			this.setState({ inputUsername: input.value })
		}
		if(input.id === 'inputPassword'){
			this.setState({ inputPassword: input.value })
		}
	}



	render(){
		return (
			<div className="modal fade" id="modalDelete" tabIndex="-1" role="dialog" aria-labelledby="modalDeleteLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalDeleteLabel">Delete User</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<h6 className="mb-4">If yow wish delete user, complete the form</h6>

							<form className="form-signin" onSubmit={(e) => { e.preventDefault(); this.handlerSubmit() }}>
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


						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button type="button" className="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalDelete;*/
