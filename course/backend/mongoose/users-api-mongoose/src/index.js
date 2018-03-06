require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uuid = require('uuid/v4');
const { success, fail, sha256, validatePassword, validate } = require('./api-utils');

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;

mongoose.connect(`mongodb://${host}:${port}/${database}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log(`Connected at "${host}" in port "${port}" using database "${database}"`);
	initAPI();
});

function initAPI(){

	const User = mongoose.model('User', 
		{	
			id: String, 
			name: String, 
			surname: String, 
			email: String, 
			username: String, 
			password: String, 
			dateRegister: String 
		}, 'users-collection'
	); /* Construyo el model y establezco la colección donde almacenaré estos documentos */

	const app = express();

	app.get('/api/users', (req, res) => {
		User.find({},{ _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1, dateRegister: 1 }).sort({ dateRegister: -1})
		.then(results =>{
			res.json(success(results));
		})
		.catch(err => {
			return res.json(fail(err));
		});
	});

	const jsonBodyParser = bodyParser.json();

	app.post('/api/user', jsonBodyParser, (req, res) => {
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

	app.put('/api/user/:id', jsonBodyParser, (req, res) => {
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

	app.delete('/api/user/:id', jsonBodyParser, (req, res) => {
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

	app.get('/api/user/:id', (req, res) => {
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

	const port = process.env.PORT;
	app.listen(port, () => console.log(`\nAPI running on port ${port}`));
}
