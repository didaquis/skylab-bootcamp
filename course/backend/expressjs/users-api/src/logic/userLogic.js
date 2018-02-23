const userData = require('../data/userData')

function validate(username, password) {
    if (!username || !password) throw Error('Invalid username and/or password.')
}

const userLogic = {
    list() {
        return userData.list().map(({ username }) => ({ username }))
    },

    register(username, password) {
        validate(username, password)

        try{
            userData.retrieve(username)
        } catch(err) {
            return userData.create(username, password)
        }

        throw Error('Username already exists.')
    },

    retrieve(username) {
        const user = userData.retrieve(username)        

        return { username: user.username }        
    },

    update(username, password, newPassword) {
        validate(username, password)

        const user = userData.retrieve(username)

        if (user.password === password) {
            userData.update(username, newPassword)
        } else
            throw Error('Wrong username and/or password.')
    },

    destroy(username, password) {
        validate(username, password)

        const user = userData.retrieve(username)

        if (user.password === password) {
            userData.delete(username)
        } else
            throw Error('Wrong username and/or password.')
    }
}

module.exports = userLogic