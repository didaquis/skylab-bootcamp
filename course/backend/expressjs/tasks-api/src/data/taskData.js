//const tasks = [];
const tasks = [
	{
		"id": "1519557912254973",
		"text": "Clean the bedroom",
		"done": true
	},
	{
		"id": "15195579123649862",
		"text": "Buy a new computer",
		"done": false
	},
	{
		"id": "15195579124742273",
		"text": "Prepare travel to Asia",
		"done": false
	},
	{
		"id": "15195579125848360",
		"text": "Do the exercises",
		"done": true
	}
]; /* Example tasks */

function idGenerator(){
	let time = new Date().getTime();
	let randomInteger = Math.floor(Math.random()*(9999-1+1)+1);
	return `${time}${randomInteger}`;
}

const taskData = {

	list(){
		return tasks;
	},

	retrieve(id){
		const task = tasks.find( (task) => {
			if(task.id === id){
				return task;
			}
		} );

		if(task){
			return task;
		}

		throw Error('Task does not exist');
	},

	create(text){
		let idValue = idGenerator();
		let textValue = text;
		let doneValue = false;

		let newTask = {
			"id": idValue,
			"text": textValue,
			"done": doneValue
		}
		tasks.push(newTask);
	},

	update(id, text, done){
		let task = this.retrieve(id);

		task.id = id;
		task.text = text;
		task.done = done;
	},

	delete(id){
		const index = tasks.findIndex((task) => task.id === id);

		if(index < 0){
			throw Error('Task does not exist');
		}

		tasks.splice(index, 1);
	}
}

module.exports = taskData;
