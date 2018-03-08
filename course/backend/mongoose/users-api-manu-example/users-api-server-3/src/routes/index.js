const { Router } = require('express')
const bodyParser = require('body-parser')
const { login, list, create, update, delete: _delete, retrieve } = require('./handlers')
const jwtValidator = require('../utils/jwtValidator')

const router = Router()

router.get('/users', jwtValidator, list)

const jsonBodyParser = bodyParser.json()

router.post('/login', jsonBodyParser, login)

router.post('/user', jsonBodyParser, create)

router.put('/user/:id', [jwtValidator, jsonBodyParser], update)

router.delete('/user/:id', [jwtValidator, jsonBodyParser], _delete)

router.get('/user/:id', jwtValidator, retrieve)

module.exports = router