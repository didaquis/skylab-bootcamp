const TaskApi = require('../src/TaskApi')
const assert = require('assert')
const { Task } = require('task-data')

describe('Task API', () => {
    let taskApi

    beforeEach(() => {
        taskApi = new TaskApi('http', 'localhost', 5000)
    })

    it('should create, retrieve and remove a task', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.retrieve(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should retrieve task')

                const task = res.data

                assert.equal(task.id, id, 'id should match')
                assert.equal(task.title, title, 'title should match')
                assert.equal(task.description, description, 'description should match')
                assert.equal(task.status, Task.TODO, 'status should match')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should list tasks', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                id = res.data.id

                return taskApi.list()
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should list tasks')

                assert(res.data, 'should respond with data')
                assert(res.data.length > 0, 'should respond with tasks in data')

                const [task] = res.data

                assert(task.id, 'should have id')
                assert.equal(task.id, id, 'id should match')
                assert(task.title, 'should have title')
                assert.equal(task.title, title, 'title should match')
                assert(!task.description, 'should not have description')

                return taskApi.remove(task.id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task DOING', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markDoing(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task DOING')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should list tasks DOING', done => {
        let title = 'title', description = 'description'

        let _id, id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                _id = res.data.id
                assert(_id, 'should respond with id in data')

                title += '-DOING'
                description += '-DOING'

                return taskApi.create(title, description)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markDoing(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task DOING')

                return taskApi.listDoing()
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should list tasks DOING')

                assert(res.data, 'should respond with data')
                assert(res.data.length > 0, 'should respond with tasks in data')

                const [task] = res.data

                assert(task.id, 'should have id')
                assert(task.id, id, 'id should match')
                assert(task.title, 'should have title')
                assert.equal(task.title, title, 'title should match')
                assert(!task.description, 'should not have description')
                assert.equal(task.status, Task.DOING, 'title should match')
                
                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                return taskApi.remove(_id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should list tasks REVIEW', done => {
        let title = 'title', description = 'description'

        let _id, id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                _id = res.data.id
                assert(_id, 'should respond with id in data')

                title += '-REVIEW'
                description += '-REVIEW'

                return taskApi.create(title, description)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markReview(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task REVIEW')

                return taskApi.listReview()
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should list tasks REVIEW')

                assert(res.data, 'should respond with data')
                assert(res.data.length > 0, 'should respond with tasks in data')

                const [task] = res.data

                assert(task.id, 'should have id')
                assert(task.id, id, 'id should match')
                assert(task.title, 'should have title')
                assert.equal(task.title, title, 'title should match')
                assert(!task.description, 'should not have description')
                assert.equal(task.status, Task.REVIEW, 'title should match')
                
                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                return taskApi.remove(_id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task REVIEW', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markReview(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task REVIEW')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task DONE', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markDone(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task DONE')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })

    it('should mark task TODO', done => {
        const title = 'title', description = 'description'

        let id

        taskApi.create(title, description)
            .then(res => {
                assert.equal(res.status, 'OK', 'should create task')
                assert(res.data, 'should respond with data')

                id = res.data.id
                assert(id, 'should respond with id in data')

                return taskApi.markTodo(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should mark task TODO')

                return taskApi.remove(id)
            })
            .then(res => {
                assert.equal(res.status, 'OK', 'should remove task')

                done()
            })
            .catch(done)
    })
})