const { Router } = require('express');
const router = Router();

const User = require('../../../models/UserModel');
const { success, fail, sha256, validatePassword, validate } = require('../../../utils/api-utils');

const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const uuid = require('uuid/v4');


router.put('/api/user/:id', jsonBodyParser, (req, res) => {
	const { body: { name, surname, email, username, password, newUsername, newPassword } } = req;
	const { params: { id } } = req;

	Promise.resolve()
		.then(() => {
			validate({ id, name, surname, email, username, password, newUsername, newPassword });
			
			if(newPassword){
				validatePassword(newPassword);
			}

			return User.findOne({ username: newUsername, 'id':{$ne: id} });
		})
		.then(user => {
			if (user) throw Error('username already exists');

			return User.findOne({ email , 'id':{$ne: id}});
		})
		.then(user => {
			if (user) throw Error('email already exists');

			return User.findOne({ id });
		})
		.then(user => {
			if(!user) throw Error('user does not exists');

			const passwordHashed = sha256(password);
			if (user.username !== username || user.password !== passwordHashed) throw Error('username and/or password wrong');

			const newPasswordHashed = sha256(newPassword);
			user.name = name;
			user.surname = surname;
			user.email = email;
			user.username = newUsername;
			user.password = newPasswordHashed;

			return user.save();
		})
		.then(() => {
			res.json(success());
		})
		.catch(err => {
			res.json(fail(err.message));
		});
});


module.exports = router;