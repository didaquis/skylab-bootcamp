const { Task, TaskData } = require('task-data')
const TaskLogic = require('../src/TaskLogic')

const assert = require('assert')

describe('Task Logic', () => {
    let tasks
    let taskData
    let taskLogic

    beforeEach(() => {
        taskData = new TaskData(tasks = [])
        taskLogic = new TaskLogic(taskData)
    })

    it('should create a task', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        assert(tasks.length > 0, 'task should be created')

        const task = tasks[0]

        assert(task instanceof Task, 'task should be instance of Task')
        assert.equal(task.id, id, 'task id should match')
        assert.equal(task.title, title, 'task title should match')
        assert.equal(task.description, description, 'task description should match')
        assert.equal(task.status, Task.TODO, 'task status should match')
    })

    it('should retrieve a task', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)

        const task = tasks[0]

        const _task = taskLogic.retrieve(task.id)

        assert.deepStrictEqual(_task, task, 'task retrieved should be the one created')
    })

    it('should update a task', () => {
        let title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        title += '...'
        description += '...'

        taskLogic.update(id, title, description)

        const task = tasks[0]

        assert.equal(task.id, id, 'task id should match')
        assert.equal(task.title, title, 'task title should match')
        assert.equal(task.description, description, 'task description should match')
        assert.equal(task.status, Task.TODO, 'task status should match')
    })

    it('should remove a task', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        let count = 1
        taskLogic.create(title, description)
        count++
        taskLogic.create(title, description)
        count++
        taskLogic.create(title, description)

        assert(tasks.length > 0, 'task should be created')

        taskLogic.remove(id)

        assert.equal(tasks.length, count, 'task should be removed')
    })

    it('should mark task DOING', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        taskLogic.markDoing(id)
        
        const task = tasks[0]

        assert.equal(task.status, Task.DOING, 'task status should match DOING')
    })

    it('should mark task REVIEW', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        taskLogic.markReview(id)
        
        const task = tasks[0]

        assert.equal(task.status, Task.REVIEW, 'task status should match REVIEW')
    })

    it('should mark task DONE', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)
        
        taskLogic.markDone(id)
        
        const task = tasks[0]

        assert.equal(task.status, Task.DONE, 'task status should match DONE')
    })

    it('should mark task TODO', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        taskLogic.markTodo(id)
        
        const task = tasks[0]

        assert.equal(task.status, Task.TODO, 'task status should match TODO')
    })

    it('should list tasks', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)
        taskLogic.create(title, description)
        taskLogic.create(title, description)

        const _tasks = taskLogic.list()

        assert(_tasks, 'should return tasks')
        assert.equal(_tasks.length, tasks.length, 'tasks should match the expected ones in store')
    })

    it('should list tasks TODO', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)
        taskLogic.create(title, description)
        taskLogic.create(title, description)

        const task = tasks[0]

        taskLogic.markDoing(task.id)

        const todos = taskLogic.listTodos()

        assert(todos, 'should return tasks')
        assert(todos.length > 0, 'should return todos')
        assert.equal(todos.length, tasks.length - 1, 'todos should match the expected ones in store')

        todos.forEach(todo => assert.equal(todo.status, Task.TODO, 'todos should have status TODO'))
    })

    it('should list tasks DOING', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)

        const task = tasks[0]
        
        taskLogic.markDoing(task.id)
        
        let count = 1
        taskLogic.create(title, description)
        count++
        taskLogic.create(title, description)

        const doings = taskLogic.listDoings()

        assert(doings, 'should return tasks')
        assert(doings.length > 0, 'should return doings')
        assert.equal(doings.length, tasks.length - count, 'doings should match the expected ones in store')

        doings.forEach(doing => assert.equal(doing.status, Task.DOING, 'doings should have status DOING'))
    })

    it('should list tasks REVIEW', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)

        const task = tasks[0]
        
        taskLogic.markReview(task.id)
        
        let count = 1
        taskLogic.create(title, description)
        count++
        taskLogic.create(title, description)

        const reviews = taskLogic.listReviews()

        assert(reviews, 'should return tasks')
        assert(reviews.length > 0, 'should return reviews')
        assert.equal(reviews.length, tasks.length - count, 'reviews should match the expected ones in store')

        reviews.forEach(review => assert.equal(review.status, Task.REVIEW, 'reviews should have status REVIEW'))
    })

    it('should list tasks DONE', () => {
        const title = 'title', description = 'description'

        taskLogic.create(title, description)

        const task = tasks[0]
        
        taskLogic.markDone(task.id)
        
        let count = 1
        taskLogic.create(title, description)
        count++
        taskLogic.create(title, description)

        const dones = taskLogic.listDones()

        assert(dones, 'should return tasks')
        assert(dones.length > 0, 'should return dones')
        assert.equal(dones.length, tasks.length - count, 'dones should match the expected ones in store')

        dones.forEach(done => assert.equal(done.status, Task.DONE, 'dones should have status DONE'))
    })
})