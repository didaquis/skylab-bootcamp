import React, { Component } from 'react';


import usersApi from '../utils/users-api-client';


class Register extends React.Component {
	constructor(){
		super();

		this.state = {
			inputName: "",
			inputSurname: "",
			inputEmail: "",
			inputUsername:"",
			inputPassword: ""
		};
	}

	handlerSubmit = (name, surname, email, username, password) => {
		usersApi.registerUser(this.state.inputName, this.state.inputSurname, this.state.inputEmail, this.state.inputUsername, this.state.inputPassword)
			.then( res => this.handlerResponseApi(res) )
			.catch(error => {throw new Error(error);});
	}

	handlerResponseApi = (result) =>{
		if(result.status === 'OK'){
			this.setState({inputName: "", inputSurname: "", inputEmail: "", inputUsername:"", inputPassword: ""});
			this.props.onSuccefullApiResponse('User registered!');
		}else{
			alert('Something went wrong!');
		}
	};


	fillInput = (input) => {
		if(input.id === 'inputName'){
			this.setState({ inputName: input.value })
		}
		if(input.id === 'inputSurname'){
			this.setState({ inputSurname: input.value })
		}
		if(input.id === 'inputEmail'){
			this.setState({ inputEmail: input.value })
		}
		if(input.id === 'inputUsername'){
			this.setState({ inputUsername: input.value })
		}
		if(input.id === 'inputPassword'){
			this.setState({ inputPassword: input.value })
		}
	}


	render(){
		return (
			<section className="py-2">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
							<form className="form-signin" onSubmit={(e) => { e.preventDefault(); this.handlerSubmit() }}>
								<h1 className="h3 mb-3 font-weight-normal">Register new user</h1>

								<label htmlFor="inputName" className="sr-only">Name</label>
								<input type="text" id="inputName" className="form-control mb-4" placeholder="Name of user" required autoFocus onChange={e => this.fillInput(e.target)} value={this.state.inputName} />

								<label htmlFor="inputSurname" className="sr-only">Surname</label>
								<input type="text" id="inputSurname" className="form-control mb-4" placeholder="Surname of user" required onChange={e => this.fillInput(e.target)} value={this.state.inputSurname} />

								<label htmlFor="inputEmail" className="sr-only">Email address</label>
								<input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required onChange={e => this.fillInput(e.target)} value={this.state.inputEmail} />

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
								<button className="btn btn-lg btn-primary btn-block" type="submit">Create new user!</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Register;