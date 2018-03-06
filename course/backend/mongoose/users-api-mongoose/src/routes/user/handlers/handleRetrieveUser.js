const { Router } = require('express');
const router = Router();

const User = require('../../../models/UserModel');
const { success, fail, sha256, validatePassword, validate } = require('../../../utils/api-utils');


router.get('/api/user/:id', (req, res) => {
	const { params: { id } } = req;

	Promise.resolve()
		.then(() => {
			validate({ id });

			return User.findOne({ id }, { _id: 0, password: 0, __v: 0 } );
		})
		.then(user => {
			if (!user) throw Error('user does not exist');

			res.json(success(user));
		})
		.catch(err => {
			res.json(fail(err.message));
		});
});


module.exports = router;