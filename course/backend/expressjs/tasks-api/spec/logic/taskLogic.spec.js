describe( "Testing taskLogic", function(){

	const taskLogic = require('../../src/logic/tasklogic');

	let textOfTask;

	beforeEach(function () {
		textOfTask = "foo task";
	});


	it("Testing: taskLogig-spec. Should delete all tasks", function(){
		taskLogic.removeAll();
		expect(taskLogic.listAll().length).toBe(0);
	})


	it("Testing: taskLogig-spec. Sould create a new task",function(){
		const numberOfTasks = taskLogic.listAll().length;

		taskLogic.create(textOfTask, false);

		expect(taskLogic.listAll().length).toBe(numberOfTasks+1);
	})


	it("Testing: taskLogig-spec. Sould create a new task and check task list is greather than 0",function(){
		taskLogic.create(textOfTask, false);

		expect(taskLogic.listAll().length).toBeGreaterThan(0);
	})

} );