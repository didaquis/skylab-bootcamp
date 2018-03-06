require('dotenv').config()

const runMongo = require('./runMongo')
const runAppAsync = require('./runAppAsync')
const { UsersDataMongo } = require('users-data')
const { UsersLogicAsync } = require('users-logic')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT

runMongo(host, port, 'bootcamp', init)

function init(err, db) {
    if (err) throw err

    const port = process.env.PORT
    const usersLogic = new UsersLogicAsync(new UsersDataMongo(db))

    runAppAsync(port, usersLogic)
}
