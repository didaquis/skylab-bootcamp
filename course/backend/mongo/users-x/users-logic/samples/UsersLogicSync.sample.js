const { UsersDataMemory } = require('users-data')

const UsersLogicSync = require('../src/UsersLogicSync')

const users = []

const usersLogic = new UsersLogicSync(new UsersDataMemory(users))

const id = usersLogic.register('n', 's', 'e', 'u', 'p')

const user = usersLogic.retrieve(id)

console.log(user)

usersLogic.update(id, 'u', 'p', 'n.', 's.', 'e.', 'u.', 'p.')

console.log(usersLogic.list())

usersLogic.destroy(id, 'u.', 'p.')

console.log(usersLogic.list())

console.log(users)