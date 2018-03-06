const { Router } = require('express');
const router = Router();

const User = require('../../../models/UserModel');
const { success, fail, sha256, validatePassword, validate } = require('../../../utils/api-utils');

const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const uuid = require('uuid/v4');


router.delete('/api/user/:id', jsonBodyParser, (req, res) => {
	const { body: { username, password } } = req;
	const { params: { id } } = req;

	Promise.resolve()
		.then(() => {
			validate({ id, username, password });

			return User.findOne({ username });
		})
		.then(user => {
			if (!user) throw Error('user does not exist or wrong credentials');

			if (user.id !== id) throw Error('user id does not match the one provided');

			if (user.username !== username || user.password !== sha256(password)) throw Error('username and/or password wrong');

			return User.deleteOne({ id });
		})
		.then(() => {
			res.json(success());
		})
		.catch(err => {
			res.json(fail(err.message));
		});
});


module.exports = router;