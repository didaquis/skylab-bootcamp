require('dotenv').config();

const express = require('express');

const app = express();

const localVar = process.env.HELLO_ENV;

app.get('/', (req, res) => {
	res.end(`<h1>${localVar}</h1>`);
});

const { PORT } = process.env;
app.listen(PORT, () => {console.log(`\n Server running on port ${PORT}\n`)});