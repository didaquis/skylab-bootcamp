// models

const User = require('./User')

// interfaces (contracts)

const IUsersData = require('./IUsersData')
const IUsersDataSync = require('./IUsersDataSync')
const IUsersDataAsync = require('./IUsersDataAsync')

// implementations

const UsersDataMemory = require('./UsersDataMemory')
const UsersDataDisk = require('./UsersDataDisk')
const UsersDataMongo = require('./UsersDataMongo')

module.exports = { User, IUsersData, IUsersDataSync, IUsersDataAsync, UsersDataMemory, UsersDataDisk, UsersDataMongo }