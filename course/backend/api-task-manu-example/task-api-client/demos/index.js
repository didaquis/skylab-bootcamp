const TaskApi = require('../src/TaskApi')
const assert = require('assert')


let taskApi


taskApi = new TaskApi('http', 'localhost', 5000)


// should create a task

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

                console.log(res)
            })
            .catch(console.error)