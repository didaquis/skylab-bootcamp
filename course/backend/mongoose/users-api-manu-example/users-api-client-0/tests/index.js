require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT, API_TOKEN } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT
token = API_TOKEN;

describe('api', () => {

    true && it('should login', done => {
        api.register('n', 's', 'e', 'username2', 'Password2')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                // TODO delete
                return api.login('username2', 'Password2')
            }).then((res) => {
                assert.equal(res.status, 'OK', 'results should be OK')
                assert(res.data.token.length > 100, 'results should be true')
                done()
            })
            .catch(done)
    })

    true && it('should register', done => {
        api.register('n', 's', 'e', 'uuu', 'pppp')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                // TODO delete

                done()
            })
            .catch(done)
    })

    !true && it('should list', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(() => api.register('n', 's', 'e', 'u1', 'p'))
            .then(() => api.list(token))
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                // TODO delete all

                done()
            })
            .catch(done)
    })

    !true && it('should delete', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.remove(token, res.data.id, 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    !true && it('should retrieve', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.retrieve(token, res.data.id))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                const user = res.data
                
                assert(user, 'should return data user')

                assert.equal(user.name, 'n')
                assert.equal(user.surname, 's')
                assert.equal(user.email, 'e')
                assert.equal(user.username, 'u')

                done()
            })
            .catch(done)
    })

    !true && it('should update', done => {
        api.register('n', 's', 'e', 'u', 'p')
            .then(res => api.update(token, res.data.id, 'n', 's', 'e', 'u2', 'p', 'u', 'p'))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })
})