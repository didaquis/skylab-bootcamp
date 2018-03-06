require('dotenv').config()

const runAppSync = require('./runAppSync')
const { UsersDataMemory } = require('users-data')
const { UsersLogicSync } = require('users-logic')

const port = process.env.PORT
const usersLogic = new UsersLogicSync(new UsersDataMemory([]))

runAppSync(port, usersLogic)
