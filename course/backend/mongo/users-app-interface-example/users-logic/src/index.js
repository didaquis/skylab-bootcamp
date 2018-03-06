// interfaces (contracts)

const IUsersLogic = require('./IUsersLogic')

// implementations

const UsersLogicSync = require('./UsersLogicSync')
const UsersLogicAsync = require('./UsersLogicAsync')

module.exports = { IUsersLogic, UsersLogicSync, UsersLogicAsync }