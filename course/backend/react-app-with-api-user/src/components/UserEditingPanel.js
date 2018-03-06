import React from 'react';

function UserEditingPanel(props){
	return(
		<div className="row">
			<div className="col-sm-12">
				<form className="form-signin border border-primary rounded p-3 mb-5">
					<h1 className="h3 mb-3 font-weight-normal">Edit user</h1>

					<label htmlFor="inputName" className="sr-only">Name</label>
					<input type="text" id="inputName" className="form-control mb-4" placeholder="Name of user" required autoFocus/>

					<label htmlFor="inputSurname" className="sr-only">Surname</label>
					<input type="text" id="inputSurname" className="form-control mb-4" placeholder="Surname of user" required />

					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control mb-4" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required/>

					<label htmlFor="inputUsername" className="sr-only">Username</label>
					<input type="text" id="inputUsername" className="form-control mb-4" placeholder="Username" required />

					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control mb-4" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>

					<div className="form-group">
						<label htmlFor="inputNewUsername" className="sr-only">New username</label>
						<input type="text" id="inputNewUsername" className="form-control" placeholder="New username" required pattern="^[a-zA-Z0-9]{6,18}$" />
						<small id="emailHelp" className="form-text text-muted">Min 6 chars. Max 18 chars. You can use minus chars, mayus chars and numbers.</small>
					</div>

					<div className="form-group">
						<label htmlFor="inputNewPassword" className="sr-only">New password</label>
						<input type="password" id="inputNewPassword" className="form-control" placeholder="New password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
						<small id="emailHelp" className="form-text text-muted">At least of 8 chars. Must include minus chars, mayus chars and numbers.</small>
					</div>

					<button className="btn btn-lg btn-primary btn-block" type="submit">Edit user!</button>
				</form>
			</div>
		</div>
	);
}

export default UserEditingPanel;