const User = require('./User')
const UserLogic = require('./UserLogic')
const SyncUserData = require('./SyncUserData')

/**
 * Sync(hronous) User Logic (business object)
 * 
 * @version 1.0.0
 */
class SyncUserLogic extends UserLogic {
    /**
     * Constructs an instance
     * 
     * @param {UserData} userData - The user data store manager
     */
    constructor(userData) {
        super()

        if (!userData instanceof SyncUserData) throw Error('userData is not synchronous')
        
        this.userData = userData
    }

    register(name, surname, email, username, password) {
        const user = new User()

        user.username = username

        if (this.userData.filter(user).length) throw Error('User already exists')

        user.name = name
        user.surname = surname
        user.email = email
        user.password = password

        return this.userData.insert(user)
    }

    retrieve(id) {
        return this.userData.retrieve(id)
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        let user = new User()

        user.username = newUsername

        const users = this.userData.filter(user)

        if (users.length && users[0].id !== id) throw Error('User already exists')

        user = this.userData.retrieve(id)

        if (user.username !== username || user.password !== password)
            throw Error('Wrong username and/or password.')

        user.name = name
        user.surname = surname
        user.email = email
        user.username = newUsername || username
        user.password = newPassword || password

        this.userData.update(user)
    }

    destroy(id, username, password) {
        const user = this.userData.retrieve(id)

        if (user.username = username && user.password === password) {
            this.userData.delete(id)
        } else
            throw Error('Wrong username and/or password.')
    }

    list() {
        return this.userData.list().map(({ id, name, surname, email, username }) => ({ id, name, surname, email, username }))
    }
}

module.exports = SyncUserLogic