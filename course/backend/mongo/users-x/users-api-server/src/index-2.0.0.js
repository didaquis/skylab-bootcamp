/**
 * Users API
 * 
 * @version 2.0.0
 */

require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const userLogic = require('./userLogic')

const app = express()

const router = express.Router()

app.use('/api', router)

router.get('/users', (req, res) => res.json(ok('Users listing succeeded.', userLogic.list())))

router.get('/users/:username', (req, res) => {
    //const username = req.params.username
    //const { username } = req.params
    const { params: { username } } = req

    try {
        const user = userLogic.retrieve(username)

        res.json(ok('User retrieval succeeded.', user))
    } catch (err) {
        res.json(ko('User retrieval failed.', err.message))
    }
})

const jsonBodyParser = bodyParser.json()

router.post('/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    try {
        userLogic.register(username, password)

        res.json(ok('User registration succeeded.'))
    } catch (err) {
        res.json(ko('User registration failed.', err.message))
    }
})

router.put('/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    const { password, newPassword } = req.body

    try {
        userLogic.update(username, password, newPassword)

        res.json(ok('User update succeeded'))
    } catch(err) {
        res.json(ko('User update failed.', err.message))
    }
})

router.delete('/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    const { password } = req.body

    try {
        userLogic.destroy(username, password)

        res.json(ok('User deletion succeeded'))
    } catch(err) {
        res.json(ko('User deletion failed.', err.message))
    }
})

function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))