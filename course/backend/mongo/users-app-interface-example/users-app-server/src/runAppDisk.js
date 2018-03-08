require('dotenv').config()

const runAppAsync = require('./runAppAsync')
const { UsersDataDisk } = require('users-data')
const { UsersLogicAsync } = require('users-logic')

const port = process.env.PORT
const filePath = process.env.FILE_PATH
const usersLogic = new UsersLogicAsync(new UsersDataDisk(filePath))

runAppAsync(port, usersLogic)
