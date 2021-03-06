const taskData = require('../data/taskData');

function validateText(text){
	if(!text){
		throw Error('No text provided for task')
	}
}

function validateId(id){
	if(!id){
		throw Error('No id provided');
	}
}

const taskLogic = {

	listAll(){
		return taskData.listAll();
	},

	listDone(){
		let allTasks = taskData.listAll();

		return allTasks.filter( (task) =>{
			if(task.done){
				return task;
			}
		} );
	},

	listTodo(){
		let allTasks = taskData.listAll();

		return allTasks.filter( (task) =>{
			if(!task.done){
				return task;
			}
		} );
	},

	create(text, doneValue){
		validateText(text);

		return taskData.create(text, doneValue);
	}, 

	markDone(id){
		validateId(id);

		let task = taskData.retrieve(id);

		taskData.update(task.id, task.text, true);
	},

	update(id, text){
		validateText(text);
		validateId(id);

		let task = taskData.retrieve(id);

		taskData.update(task.id, text, task.done);
	}, 

	remove(id){
		validateId(id);

		taskData.delete(id);
	},

	removeAll(){
		/**
		 * //Solución 1
		 *
		 * let allTasks = taskData.listAll();
		 * const idOfAllTasks = [];
		 * for(let i = 0; i < allTasks.length; i++){
		 * 	idOfAllTasks.push(allTasks[i].id)
		 * }
		 * for(let i = 0; i < idOfAllTasks.length; i++){
		 * 	taskData.delete(idOfAllTasks[i]);
		 * }
		 */
		taskData.deleteAll();
	}
}

module.exports = taskLogic;
