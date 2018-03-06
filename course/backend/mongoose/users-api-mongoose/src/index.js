require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const userRouter = require('./routes/user/index');

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
	const app = express();

	app.use('', userRouter);

	app.use(function(req, res){
		res.status(404);
		res.json({ "error": "404", "message": "URL not found" });
	});

	const port = process.env.PORT;
	app.listen(port, () => console.log(`\nAPI running on port ${port}`));
}
