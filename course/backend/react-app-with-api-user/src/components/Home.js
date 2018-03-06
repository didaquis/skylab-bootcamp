import React, { Component } from 'react';

import UserDetails from './UserDetails';
import UserEditingPanel from './UserEditingPanel';

import usersApi from '../utils/users-api-client';


class Home extends Component {
	constructor() {
		super();
		this.state = {
			usersList: []
		};
	}

	componentWillMount(){
		usersApi.listAllUsers()
			.then( res => this.refreshUserList(res) )
			.catch(error => {throw new Error(error);});
	}

	refreshUserList = (results) => {
		if(results.status === 'OK'){
			this.setState({usersList:results.data})
		}
	}

	render(){
		return (
			<section className="py-2">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<h1 className="h3 mb-3 font-weight-normal">List Users</h1>
							<ul className="list-unstyled">
								{this.state.usersList.map((user)=>{
									return (
										<UserDetails 
											dataEmail={user.email} 
											dataId={user.id} 
											dataName={user.name} 
											dataSurname={user.surname} 
											dataUsername={user.username} 
											key={user.id} 
										/>
									)
								})}
								<UserEditingPanel />
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;