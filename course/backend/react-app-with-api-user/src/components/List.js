import React, { Component } from 'react';

import UserDetails from './UserDetails';
//import UserEditingPanel from './UserEditingPanel';

import usersApi from '../utils/users-api-client';

import ModalDelete from './ModalDelete';


class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usersList: [],
			idOfUserForDeleteModal: ''
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

	handlerOnClickDeleteButton = (idOfData) => {
		this.setState({idOfUserForDeleteModal:idOfData});
	}


	render(){
		return (
			<section className="">
				<ModalDelete idOfUser={this.state.idOfUserForDeleteModal} />
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
							<h1 className="h3 font-weight-normal">List Users</h1>
							<ul className="list-group">
								{this.state.usersList.map((user)=>{
									return (
										<UserDetails 
											dataEmail={user.email} 
											dataId={user.id} 
											dataName={user.name} 
											dataSurname={user.surname} 
											dataUsername={user.username} 
											key={user.id} 
											onClick={this.handlerOnClickDeleteButton}
										/>
									)
								})}
								{/*<UserEditingPanel />*/}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default List;