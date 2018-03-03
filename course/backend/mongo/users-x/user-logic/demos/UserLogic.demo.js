//const UserData = require('../src/UserData')
const ArrayUserData = require('../src/ArrayUserData')
const UserLogic = require('../src/UserLogic')

const users = []
//const userLogic = new UserLogic(new UserData(users))
const userLogic = new UserLogic(new ArrayUserData(users))

const id = userLogic.register('n','s','e','u','p')

const user = userLogic.retrieve(id)
//console.log(user)

userLogic.update(id, 'u', 'p', 'n.','s.','e.','u.','p.')

console.log(userLogic.list())

userLogic.destroy(id, 'u.', 'p.')

console.log(userLogic.list())

console.log(users)