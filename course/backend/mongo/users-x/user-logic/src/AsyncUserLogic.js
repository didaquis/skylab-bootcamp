const User = require('./User')
const UserLogic = require('./UserLogic')
const AsyncUserData = require('./AsyncUserData')

/**
 * Async(hronous) User Logic (business object)
 * 
 * @version 1.0.0
 */
class AsyncUserLogic extends UserLogic {
    /**
     * Constructs an instance
     * 
     * @param {UserData} userData - The user data store manager (must be asynchronous)
     */
    constructor(userData) {
        super()

        if (!userData instanceof AsyncUserData) throw Error('userData is not asynchronous')

        this.userData = userData
    }

    register(name, surname, email, username, password) {
        const user = new User()

        user.username = username

        return this.userData.filter(user)
            .then(users => {
                if (users.length) throw Error('User already exists')

                user.name = name
                user.surname = surname
                user.email = email
                user.password = password

                return this.userData.insert(user)
            })
    }

    retrieve(id) {
        return this.userData.retrieve(id)
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        return new Promise((resolve, reject) => {
            const user = new User()

            user.username = newUsername

            this.userData.filter(user)
                .then(users => {
                    const _user = users[0]

                    if (_user && _user.id !== id) throw Error('User already exists')

                    return this.retrieve(id)
                })
                .then(user => {
                    if (user.username !== username || user.password !== password)
                        throw Error('Wrong username and/or password.')

                    user.name = name
                    user.surname = surname
                    user.email = email
                    user.username = newUsername || username
                    user.password = newPassword || password

                    return this.userData.update(user)
                })
                .then(resolve)
                .catch(reject)
        })
    }

    destroy(id, username, password) {
        // TODO make async!
        
        const user = this.userData.retrieve(id)

        if (user.username = username && user.password === password) {
            this.userData.delete(id)
        } else
            throw Error('Wrong username and/or password.')
    }

    list() {
        return this.userData.list().then(users => users.map(({ id, name, surname, email, username }) => ({ id, name, surname, email, username })))
    }
}

module.exports = AsyncUserLogic