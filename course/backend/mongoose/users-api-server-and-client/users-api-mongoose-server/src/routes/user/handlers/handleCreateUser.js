const { Router } = require('express');
const router = Router();

const User = require('../../../models/UserModel');
const { success, fail, sha256, validatePassword, validate } = require('../../../utils/api-utils');

const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const uuid = require('uuid/v4');


router.post('/api/user', jsonBodyParser, (req, res) => {
	const { body: { name, surname, email, username, password } } = req;

	Promise.resolve()
		.then(() => {
			validate({ name, surname, email, username, password });

			validatePassword(password);

			return User.findOne({ username });
		})
		.then(user => {
			if (user) throw Error('username already exists');

			return User.findOne({ email });
		})
		.then(user => {
			if (user) throw Error('email already exists');

			const id = uuid();
			const newTimestamp = new Date().getTime().toString();
			const passwordHashed = sha256(password);

			const NewUser = new User({
				id: id,
				name: name,
				surname: surname,
				email: email,
				username: username,
				password: passwordHashed,
				dateRegister: newTimestamp
			});

			return NewUser.save().then(() => id);
		})
		.then(id => {
			res.json(success({ id }));
		})
		.catch(err => {
			res.json(fail(err.message));
		});
});


module.exports = router;