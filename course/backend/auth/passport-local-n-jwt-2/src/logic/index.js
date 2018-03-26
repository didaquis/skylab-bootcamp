const { User } = require('../models')

function publicUserData(user) {
    const { _id, username } = user

    return { id: _id, username }
}

module.exports = {
    register(username, password) {
        return User.create({ username, password })
            .then(user => publicUserData(user))
    },

    login(username, password) {
        return User.findOne({ username, password })
            .then(user => {
                if (!user) throw Error('username and/or password wrong')

                return publicUserData(user)
            })
    },

    retrieve(id) {
        return User.findById(id)
            .then(user => {
                if (!user) throw Error(`no user found with id ${id}`)

                return publicUserData(user)
            })
    }

}