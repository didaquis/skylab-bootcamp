const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const { UsersLogicAsync } = require('users-logic')

function runAppAsync(port, usersLogic) {
    if (!usersLogic instanceof UsersLogicAsync) throw Error('users logic is not asynchronous')

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', (req, res) => {
        let { query: { id, user, error } } = req

        if (user) user = JSON.parse(user)

        const users = usersLogic.list()
            .then(users => {
                res.render('index', { id, user, error, users })
            })
    })

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    app.post('/register', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        usersLogic.register(name, surname, email, username, password)
            .then(id => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: "/",
                    query: { user: JSON.stringify({ name, surname, email, username }), error: err.message }
                }))
            })
    })

    app.get('/edit/:id', (req, res) => {
        const { params: { id } } = req

        usersLogic.retrieve(id)
            .then(user => {
                res.redirect(url.format({
                    pathname: "/",
                    query: { id }
                }))
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: "/",
                    query: { id, error: err.message }
                }))
            })
    })

    app.post('/save/:id', formBodyParser, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, newUsername, newPassword, username, password } } = req

        usersLogic.update(id, username, password, name, surname, email, newUsername, newPassword)
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: "/",
                    query: { id, user: JSON.stringify({ name, surname, email, username, newUsername }), error: err.message }
                }))
            })

    })

    app.listen(port, () => console.log(`users server running on port ${port}`))
}

module.exports = runAppAsync
