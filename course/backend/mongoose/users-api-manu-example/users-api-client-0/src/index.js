const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    _callWithToken(token, method, path, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            auth: {
                    'Bearer': token
                },
            json: true
        })
    },

    login(username, password) {
        return this._call('post', 'login', {username, password})
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    list(token) {
        return this._callWithToken(token, 'get', 'users')
    },

    remove(id, username, password, token) {
        return this._callWithToken(token, 'delete', `user/${id}`, { username, password })
    },

    retrieve(id, token) {
        return this._callWithToken(token, 'get', `user/${id}`)
    },

    update(id, name, surname, email, newUsername, newPassword, username, password, token) {
        return this._callWithToken(token, 'put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password })
    }
}

module.exports = api