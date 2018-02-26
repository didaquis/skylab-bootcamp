require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const formBodyParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');


let tasksList = [];

class Task {
	constructor(text){
		this.id = this.generateId();
		this.text = text;
		this.done = false;
	}

	generateId(){
		let time = new Date().getTime();
		let randomInteger = Math.floor(Math.random()*(9999-1+1)+1);
		return `${time}${randomInteger}`;
	}
}

app.get('/', (req, res) => {
	res.render('index', { tasksList });
});


app.post('/tasks', formBodyParser, (req, res) => {
	const { task } = req.body;

	// Creo una nueva tarea
	let newTask = new Task(task);
	tasksList.push(newTask);

	res.redirect('/');
});


app.get('/tasks/markasdone/:id', (req, res) => {
	const idTask = req.params.id;

	const selectedTask = tasksList.find( (task) => task.id === idTask );
	selectedTask.done = true;

	res.redirect('/');
});


app.get('/tasks/delete/:id', (req, res) => {
	const idTask = req.params.id;

	const index = tasksList.findIndex((task) => task.id === idTask);
	tasksList.splice(index, 1);

	res.redirect('/');
});



app.use(function(req, res){
	res.status(404);
	res.json({ "error": "404", "message": "URL not found" });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Task API running on port: ${port}`) );
