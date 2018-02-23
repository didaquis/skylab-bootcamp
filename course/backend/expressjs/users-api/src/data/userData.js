const users = []

const userData = {
    list() { return users },

    create(username, password) {
        users.push({ username, password })
    },

    retrieve(username) {
        const user = users.find(user => user.username === username)
        
        if (user) return user 

        throw Error('User does not exist.')
    },

    update(username, password) {
        const user = this.retrieve(username)

        user.password = password
    },

    delete(username) {
        const index = users.findIndex(user => user.username === username)

        if (index < 0) throw Error('User does not exist.')

        users.splice(index, 1)
    }
}

module.exports = userData