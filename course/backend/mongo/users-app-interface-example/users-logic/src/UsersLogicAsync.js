const { User, IUsersDataAsync } = require('users-data')
const IUsersLogic = require('./IUsersLogic')

/**
 * Users Logic Async(hronous)
 * 
 * Business object that manages users logic asynchronously
 * 
 * @version 1.0.0
 */
class UsersLogicAsync extends IUsersLogic {
    /**
     * Constructs an instance
     * 
     * @param {IUsersDataAsync} usersData - The users data storage manager (asynchronous)
     */
    constructor(usersData) {
        super()

        if (!usersData instanceof IUsersDataAsync) throw Error('users data storage manager is not asynchronous')

        this.usersData = usersData
    }

    register(name, surname, email, username, password) {
        const user = new User()

        user.username = username

        return this.usersData.filter(user)
            .then(users => {
                if (users.length) throw Error('user already exists')

                user.name = name
                user.surname = surname
                user.email = email
                user.password = password

                return this.usersData.insert(user)
            })
    }

    retrieve(id) {
        return this.usersData.retrieve(id)
    }

    update(id, username, password, name, surname, email, newUsername, newPassword) {
        return new Promise((resolve, reject) => {
            const user = new User()

            user.username = newUsername

            this.usersData.filter(user)
                .then(users => {
                    const _user = users[0]

                    if (_user && _user.id !== id) throw Error('user already exists')

                    return this.retrieve(id)
                })
                .then(user => {
                    if (user.username !== username || user.password !== password)
                        throw Error('wrong username and/or password.')

                    user.name = name
                    user.surname = surname
                    user.email = email
                    user.username = newUsername || username
                    user.password = newPassword || password

                    return this.usersData.update(user)
                })
                .then(resolve)
                .catch(reject)
        })
    }

    destroy(id, username, password) {
        // TODO make async!

        const user = this.usersData.retrieve(id)

        if (user.username = username && user.password === password) {
            this.usersData.delete(id)
        } else
            throw Error('wrong username and/or password.')
    }

    list() {
        return this.usersData.list().then(users => users.map(({ id, name, surname, email, username }) => ({ id, name, surname, email, username })))
    }
}

module.exports = UsersLogicAsync