const Task = require('../src/Task')
const TaskData = require('../src/TaskData')

const assert = require('assert')

describe('Task Data', () => {
    let tasks
    let taskData
    let task

    beforeEach(() => {
        taskData = new TaskData(tasks = [])
        task = new Task(undefined, 'title', 'description', Task.TODO)
    })

    it('should create a task', () => {
        const id = taskData.insert(task)

        assert(task.id, 'task should have id')
        assert.equal(task.id, id, 'task id should match returned')
    })

    it('should list tasks', () => {
        taskData.insert(task)

        const _tasks = taskData.list()

        assert(_tasks, 'tasks should be listed')
        assert(_tasks.length > 0, 'list should contain a task')

        const [ _task ] = _tasks

        assert.deepStrictEqual(_task, task, 'task listed should be the one inserted')
    })

    it('should retrieve task', () => {
        taskData.insert(task)

        const _task = taskData.retrieve(task.id)

        assert.deepStrictEqual(_task, task, 'task retrieved should be the one inserted')
    })

    it('should update task', () => {
        taskData.insert(task)

        const _task = taskData.retrieve(task.id)

        _task.title += '...'
        _task.description += '...'
        _task.status = Task.DONE

        taskData.update(_task)

        const __task = taskData.retrieve(task.id)

        assert.deepStrictEqual(__task, _task, 'task retrieved should be the one updated')
    })

    it('should delete a task', () => {
        taskData.insert(task)

        taskData.delete(task.id)

        assert.throws(() => taskData.retrieve(task.id), Error, 'retrieval should throw an error after task deleted')
    })

    it('should filter tasks', () => {
        taskData.insert(task)

        let count = 1
        let _task = new Task(undefined, 't' + count, 'd' + count, Task.DOING)
        taskData.insert(_task)

        count++
        _task = new Task(undefined, 't' + count, 'd' + count, Task.REVIEW)
        taskData.insert(_task)

        count++
        _task = new Task(undefined, 't' + count, 'd' + count, Task.DONE)
        taskData.insert(_task)

        let _tasks = taskData.filter(task.id)

        assert(_tasks, 'should filter tasks by id')
        assert.equal(_tasks.length, tasks.length - count, 'filtered tasks should be the stored ones that match the filter')
        assert.deepStrictEqual(_tasks[0], task, 'filtered task by id should match stored one')

        _tasks = taskData.filter(undefined, task.title)

        assert(_tasks, 'should filter tasks by title')
        assert.equal(_tasks.length, tasks.length - count, 'filtered tasks should be the stored ones that match the filter')
        assert.deepStrictEqual(_tasks[0], task, 'filtered task by title should match stored one')

        _tasks = taskData.filter(undefined, undefined, task.description)

        assert(_tasks, 'should filter tasks by description')
        assert.equal(_tasks.length, tasks.length - count, 'filtered tasks should be the stored ones that match the filter')
        assert.deepStrictEqual(_tasks[0], task, 'filtered task by description should match stored one')

        _tasks = taskData.filter(undefined, undefined, undefined, Task.TODO)

        assert(_tasks, 'should filter tasks by status')
        assert.equal(_tasks.length, tasks.length - count, 'filtered tasks should be the stored ones that match the filter')
        assert.deepStrictEqual(_tasks[0], task, 'filtered task by status should match stored one')

        _tasks = taskData.filter(task.id, task.title, task.description, Task.TODO)

        assert(_tasks, 'should filter tasks by status')
        assert.equal(_tasks.length, tasks.length - count, 'filtered tasks should be the stored ones that match the filter')
        assert.deepStrictEqual(_tasks[0], task, 'filtered task by status should match stored one')
    })
})