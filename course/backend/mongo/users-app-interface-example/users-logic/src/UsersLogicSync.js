const { User, IUsersDataSync } = require('users-data')
const IUsersLogic = require('./IUsersLogic')

/**
 * Users Logic Sync(hronous)
 * 
 * Business object that manages users logic synchronously
 * 
 * @version 1.0.0
 */
class UsersLogicSync extends IUsersLogic {
    /**
     * Constructs an instance
     * 
     * @param {IUsersDataSync} usersData - The users data storage manager (synchronous)
     */
    constructor(usersData) {
        super()

        if (!usersData instanceof IUsersDataSync) throw Error('users data storage is not synchronous')

        this.usersData = usersData
    }

    register(name, surname, email, username, password) {
        const user = new User()

        user.username = username

        if (this.usersData.filter(user).length) throw Error('user already exists')

        user.name = name
        user.surname = surname
        user.email = email
        user.password = password

        return this.usersData.insert(user)
    }

    retrieve(id) {
        return this.usersData.retrieve(id)
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        let user = new User()

        user.username = newUsername

        const users = this.usersData.filter(user)

        if (users.length && users[0].id !== id) throw Error('user already exists')

        user = this.usersData.retrieve(id)

        if (user.username !== username || user.password !== password)
            throw Error('wrong username and/or password.')

        user.name = name
        user.surname = surname
        user.email = email
        user.username = newUsername || username
        user.password = newPassword || password

        this.usersData.update(user)
    }

    destroy(id, username, password) {
        const user = this.usersData.retrieve(id)

        if (user.username = username && user.password === password) {
            this.usersData.delete(id)
        } else
            throw Error('wrong username and/or password.')
    }

    list() {
        return this.usersData.list().map(({ id, name, surname, email, username }) => ({ id, name, surname, email, username }))
    }
}

module.exports = UsersLogicSync