require('dotenv').config();

const express = require('express');

const taskRouter = require('./api/taskRouter');

const app = express();

app.use('/api', taskRouter);

app.use(function(req, res){
	res.status(404);
	res.json({ "error": "404", "message": "URL not found" });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Task API running on port: ${port}`) );