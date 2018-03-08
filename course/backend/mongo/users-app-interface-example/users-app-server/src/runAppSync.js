const express = require('express')
const bodyParser = require('body-parser')
const url = require('url')
const { UsersLogicSync } = require('users-logic')

function runAppSync(port, usersLogic) {
    if (!usersLogic instanceof UsersLogicSync) throw Error('users logic is not synchronous')

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', (req, res) => {
        let { query: { id, user, error } } = req

        if (user) user = JSON.parse(user)

        const users = usersLogic.list()

        res.render('index', { id, user, error, users })
    })

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    app.post('/register', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        try {
            usersLogic.register(name, surname, email, username, password)

            res.redirect('/')
        } catch (err) {
            res.redirect(url.format({
                pathname: "/",
                query: { user: JSON.stringify({ name, surname, email, username }), error: err.message }
            }))
        }
    })

    app.get('/edit/:id', (req, res) => {
        const { params: { id } } = req

        const user = usersLogic.retrieve(id)

        res.redirect(url.format({
            pathname: "/",
            query: { id }
        }))
    })

    app.post('/save/:id', formBodyParser, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, newUsername, newPassword, username, password } } = req

        try {
            usersLogic.update(id, username, password, name, surname, email, newUsername, newPassword)

            res.redirect('/')
        } catch (err) {
            res.redirect(url.format({
                pathname: "/",
                query: { id, user: JSON.stringify({ name, surname, email, username, newUsername }), error: err.message }
            }))
        }

    })

    app.listen(port, () => console.log(`users app server running on port ${port}`))
}

module.exports = runAppSync
