/**
 * Users API client.
 * 
 */

const rp = require('request-promise');

const usersApi = {
	_baseUrl() {
		with (this) {
			return `${protocol}://${host}:${port}/`;
		}
	},

	_call(method, path, body) {
		return rp({
			method,
			uri: `${this._baseUrl()}/${path}`,
			body,
			json: true
		})
	},

	listAllUsers() {
		return this._call('get', 'api/users/');
	},

	retrieveUser(id){
		return this._call('get', `api/user/${id}`);
	},

	registerUser(name, surname, email, username, password){
		const body = {
			"name": name,
			"surname": surname,
			"email": email,
			"username": username,
			"password": password
		};
		return this._call('post', 'api/user', body);
	},

	deleteUser(id, username, password){
		const body = {
			"username": username,
			"password": password
		};
		return this._call('delete',`api/user/${id}`, body);
	}, 

	updateUser(id, name, surname, email, newUsername, newPassword, username, password){
		return this._call('put', `api/user/${id}`, { name, surname, email, newUsername, newPassword, username, password });
	}
};

module.exports = usersApi;
