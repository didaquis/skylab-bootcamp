const Task = require('../src/Task')
const TaskData = require('../src/TaskData')

const assert = require('assert')

let tasks
let taskData
let task

taskData = new TaskData(tasks = [])
task = new Task(undefined, 'title', 'description', Task.TODO)

// should filter tasks

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
