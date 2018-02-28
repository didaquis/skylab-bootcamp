describe( "Testing taskData", function(){

	const taskData = require('../../src/data/taskData');

	let textOfTask;

	beforeEach(function () {
		textOfTask = "foo task";
	});


	it("Testing: taskData-spec. Should delete all tasks", function(){
		taskData.deleteAll();
		expect(taskData.listAll().length).toBe(0);
	})


	it("Testing: taskData-spec. Sould create a new task",function(){
		const numberOfTasks = taskData.listAll().length;

		taskData.create(textOfTask, false);

		expect(taskData.listAll().length).toBe(numberOfTasks+1);
	})


	it("Testing: taskData-spec. Sould create a new task and check task list is greather than 0",function(){
		taskData.create(textOfTask, false);

		expect(taskData.listAll().length).toBeGreaterThan(0);
	})

} );