const bodyParser = require('body-parser');

const taskLogic = require('../logic/taskLogic');

const { Router } = require('express');

const { success, fail } = require('./api-utils');

const router = Router();

const jsonBodyParser = bodyParser.json(); /* Middleware for methods: PUT, POST, DETELE and PATCH */


/* GET (list all tasks done) */
router.get('/tasks/done', (req, res) => {
	return res.json( success( 'Tasks listed', taskLogic.listDone()) );
});


/* GET (list all tasks todo) */
router.get('/tasks/todo', (req, res) => {
	return res.json( success( 'Tasks listed', taskLogic.listTodo()) );
});


/* POST (create new task) */
router.post('/tasks/', jsonBodyParser, (req, res) => {
	const { text } = req.body;

	try{
		taskLogic.create(text);

		res.json( success('New Task created') );
	}catch (err) {
		res.json( fail('Error creating new task', err.message) );
	}
});


/* PUT (mark task as done) */
router.put('/tasks/:id?', jsonBodyParser, (req, res) => {
	const { params: {id} } = req;

	try{
		taskLogic.markDone(id);

		res.json( success('Task marked as completed') );
	}catch(err){
		res.json( fail('Error updating task', err.message) );
	}
});


/* PATCH (update text of task) */
router.patch('/tasks/:id?', jsonBodyParser, (req, res) => {
	const { params: {id} } = req;
	const { text } = req.body;

	try{
		taskLogic.update(id, text);

		res.json( success('Task updated') );
	}catch (err) {
		res.json( fail('Error updating task', err.message) );
	}
});


/* DELETE (delete one task) */
router.delete('/tasks/:id', jsonBodyParser, (req, res) => {
	const { params: {id} } = req;

	try{
		taskLogic.remove(id);

		res.json( success('Task removed') );
	}catch (err) {
		res.json( fail('Error removing task', err.message) );
	}
});


/* DELETE (delete all task) */
router.delete('/tasks/', (req, res) => {
	try{
		taskLogic.removeAll();

		res.json( success('All tasks removed') );
	}catch (err) {
		res.json( fail('Error removing all tasks', err.message) );
	}
});


module.exports = router;
