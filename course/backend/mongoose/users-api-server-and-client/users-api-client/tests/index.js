require('dotenv').config();

const usersApi = require('../src/index');
const assert = require('assert');

const { API_PROTOCOL, API_HOST, API_PORT } = process.env;

usersApi.protocol = API_PROTOCOL;
usersApi.host = API_HOST;
usersApi.port = API_PORT;

describe('api', () => {


	it('should list', done => {
		usersApi.listAllUsers()
		.then(res => {
			assert.equal(res.status, 'OK', 'results should be OK')

			done();
		})
		.catch(done);
	})


	it('should register and delete', done => {
		let userId = '';

		usersApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
			.then((res) => {
				assert.equal(res.status, 'OK', 'results should be OK');

				userId = res.data.id;
				return usersApi.listAllUsers();
			})
			.then(res => {
				assert.equal(res.status, 'OK', 'results should be OK');

				assert(res.data && res.data.length > 0, 'should return data array');

				return usersApi.deleteUser(userId, 'username', 'PASSword1234');
			})
			.then((res) =>{
				assert.equal(res.status, 'OK', 'results should be OK');
				done();
			})
			.catch(done);
	})


	it('should register, update, and delete', done => {
		let userId = '';

		usersApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
			.then((res) => {
				assert.equal(res.status, 'OK', 'results should be OK');
				
				userId = res.data.id;
				return usersApi.listAllUsers();
			})
			.then(res => {
				assert.equal(res.status, 'OK', 'results should be OK');

				assert(res.data && res.data.length > 0, 'should return data array');

				return usersApi.updateUser(userId, 'na', 'su', 'em@email.com', 'newUsername', 'newPassword123', 'username', 'PASSword1234');
			}).then((res) =>{
				assert.equal(res.status, 'OK', 'results should be OK');

				return usersApi.deleteUser(userId, 'newUsername', 'newPassword123');
		
			}).then(res =>{
				assert.equal(res.status, 'OK', 'results should be OK');
				done();
			})
			.catch(done);
	})


	it('should register, retrieve and delete', done => {
		let userId = '';

		usersApi.registerUser('name', 'surname', 'email@email.com', 'username', 'PASSword1234')
			.then((res) => {
				assert.equal(res.status, 'OK', 'results should be OK');

				userId = res.data.id;
				return usersApi.retrieveUser(userId);
			})
			.then(res => {
				assert.equal(res.status, 'OK', 'results should be OK');

				assert(res.data.email == 'email@email.com', 'should return an email');

				return usersApi.deleteUser(userId, 'username', 'PASSword1234');
			})
			.then((res) =>{
				assert.equal(res.status, 'OK', 'results should be OK');
				done();
			})
			.catch(done);
	})

})