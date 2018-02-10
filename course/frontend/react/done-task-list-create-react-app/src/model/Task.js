
class Task {
	constructor(textOfTask){
		this.textOfTask = textOfTask;
		this.completedTask = false;
		this.id = new Date().getTime();
	}
}

export default Task;