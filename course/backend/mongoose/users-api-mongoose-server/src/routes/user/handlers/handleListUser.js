const { Router } = require('express');
const router = Router();

const User = require('../../../models/UserModel');
const { success, fail, sha256, validatePassword, validate } = require('../../../utils/api-utils');


router.get('/api/users', (req, res) => {
	User.find({},{ _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1, dateRegister: 1 }).sort({ dateRegister: -1})
	.then(results =>{
		res.json(success(results));
	})
	.catch(err => {
		return res.json(fail(err));
	});
});


module.exports = router;