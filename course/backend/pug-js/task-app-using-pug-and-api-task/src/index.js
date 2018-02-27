require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const formBodyParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

/* Importamos la api client que nos permitirá conectar con la API externa */
const taskApi = require('./api/taskApi.js');


app.get('/', (req, res) => {
	taskApi.requestAllTasks()
		.then(result => { handlerRender(result.data)})
		.catch(err => console.log(err));

	function handlerRender(allTasks){
		let tasksList = allTasks.data;
		res.render('index', { tasksList });
	}
});


app.post('/tasks', formBodyParser, (req, res) => {
	const { task } = req.body;

	taskApi.createNewTask(task, false)
		.then(result => res.redirect('/') )
		.catch(error => console.log(error));
});


app.get('/tasks/markasdone/:id', (req, res) => {
	const idTask = req.params.id;

	taskApi.markTaskAsDone(idTask)
		.then(results => res.redirect('/') )
		.catch(err => console.log(err));
});


app.get('/tasks/delete/:id', (req, res) => {
	const idTask = req.params.id;

	taskApi.deleteTask(idTask)
		.then(results => res.redirect('/') )
		.catch(err => console.log(err));
});


app.use(function(req, res){
	res.status(404);
	res.json({ "error": "404", "message": "URL not found" });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Task API running on port: ${port}`) );
