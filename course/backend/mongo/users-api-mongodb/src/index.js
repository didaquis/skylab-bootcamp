require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uuid = require('uuid/v4');
const { success, fail, sha256, validatePassword, validate } = require('./api-utils');

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;
const collection = process.env.MONGO_COL;


MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
	if (err) {
		throw err;
	}

	const db = conn.db(database);

	const app = express();

	app.get('/api/users', (req, res) => {
		db.collection(collection).find().sort({ dateRegister: -1}).project({ _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1, dateRegister: 1 }).toArray((err, users) => {
			if (err) return res.json(fail(err));

			res.json(success(users));
		});
	});

	const jsonBodyParser = bodyParser.json();

	app.post('/api/user', jsonBodyParser, (req, res) => {
		const { body: { name, surname, email, username, password } } = req;

		Promise.resolve()
			.then(() => {
				validate({ name, surname, email, username, password });

				validatePassword(password);

				return db.collection(collection).findOne({ username });
			})
			.then(user => {
				if (user) throw Error('username already exists');

				return db.collection(collection).findOne({ email });
			})
			.then(user => {
				if (user) throw Error('email already exists');

				const id = uuid();
				const newTimestamp = new Date().getTime().toString();
				const passwordHashed = sha256(password);

				return db.collection(collection).insert({ id, name, surname, email, username, password:passwordHashed, dateRegister: newTimestamp })
					.then(() => id);
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

				return db.collection(collection).findOne({ username: newUsername, 'id':{$ne: id} });
			})
			.then(user => {
				if (user) throw Error('username already exists');

				return db.collection(collection).findOne({ email , 'id':{$ne: id}});
			})
			.then(user => {
				if (user) throw Error('email already exists');

				return db.collection(collection).findOne({ id });
			})
			.then(user => {
				if(!user) throw Error('user does not exists');

				const passwordHashed = sha256(password);
				if (user.username !== username || user.password !== passwordHashed) throw Error('username and/or password wrong');

				const newPasswordHashed = sha256(newPassword);
				return db.collection(collection).updateOne({ id }, { $set: { name, surname, email, username: newUsername, password: newPasswordHashed } });
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

				return db.collection(collection).findOne({ username });
			})
			.then(user => {
				if (!user) throw Error('user does not exist');

				if (user.id !== id) throw Error('user id does not match the one provided');

				if (user.username !== username || user.password !== sha256(password)) throw Error('username and/or password wrong');

				return db.collection(collection).deleteOne({ id });
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

				return db.collection(collection).findOne({ id }, { projection: { _id: 0, password: 0 } });
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


	process.on('SIGINT', () =>{
		console.log('\nStopping API server...');
		conn.close();
		process.exit();
	});
});
