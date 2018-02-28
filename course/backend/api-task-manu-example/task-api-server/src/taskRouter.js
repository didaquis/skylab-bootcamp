const { Router } = require('express')
const bodyParser = require('body-parser')
const { success, fail } = require('./api-utils')

const { TaskLogic } = require('task-logic')
const { TaskData } = require('task-data')

const tasks = []
const taskData = new TaskData(tasks)
const taskLogic = new TaskLogic(taskData)

const router = Router()

const jsonBodyParser = bodyParser.json()

router.post('/task', jsonBodyParser, (req, res) => {
    const { body: { title, description } } = req

    try {
        const id = taskLogic.create(title, description)

        res.json(success({ id }))
    } catch (err) {
        res.json(fail(err.message))
    }
})

router.get('/tasks/:status?', (req, res) => {
    const { params : { status }} = req

    switch(status) {
        case 'TODO':
            return res.json(success(compress(taskLogic.listTodos())))
        case 'DOING':
            return res.json(success(compress(taskLogic.listDoings())))
        case 'REVIEW':
            return res.json(success(compress(taskLogic.listReviews())))
        case 'DONE':
            return res.json(success(compress(taskLogic.listDones())))
        default:
            res.json(success(compress(taskLogic.list())))
    }
})

function compress(tasks) {
    return tasks.map(({ id, title, status }) => ({ id, title, status }))
}

router.get('/task/:id', (req, res) => {
    const { params : { id }} = req

    try {
        const task = taskLogic.retrieve(id)

        res.json(success(task))
    } catch(err) {
        res.json(fail(err.message))
    }
})

router.put('/task/:id/:status', (req, res) => {
    const { params : { id, status }} = req

    try {
        switch(status) {
            case 'TODO':
                taskLogic.markTodo(id)
                break
            case 'DOING':
                taskLogic.markDoing(id)
                break
            case 'REVIEW':
                taskLogic.markReview(id)
                break
            case 'DONE':
                taskLogic.markDone(id)
                break
        }

        res.json(success())
    } catch(err) {
        res.json(fail(err.message))
    }
})

router.delete('/task/:id', (req, res) => {
    const { params : { id }} = req

    try {
        taskLogic.remove(id)

        res.json(success())
    } catch(err) {
        res.json(fail(err.message))
    }
})

module.exports = router
