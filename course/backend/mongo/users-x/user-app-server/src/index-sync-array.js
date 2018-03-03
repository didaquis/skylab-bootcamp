require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { User, ArrayUserData, SyncUserLogic } = require('user-logic')
const url = require('url')

init()

function init() {
    const userLogic = new SyncUserLogic(new ArrayUserData([]))

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', (req, res) => {
        let { query: { id, user, error } } = req

        if (user) user = JSON.parse(user)

        const users = userLogic.list()

        res.render('index', { id, user, error, users })
    })

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    app.post('/register', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        try {
            userLogic.register(name, surname, email, username, password)

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

        const user = userLogic.retrieve(id)

        res.redirect(url.format({
            pathname: "/",
            query: { id }
        }))
    })

    app.post('/save/:id', formBodyParser, (req, res) => {
        const { params: { id } } = req
        const { body: { name, surname, email, newUsername, newPassword, username, password } } = req

        try {
            userLogic.update(id, username, password, name, surname, email, newUsername, newPassword)

            res.redirect('/')
        } catch (err) {
            res.redirect(url.format({
                pathname: "/",
                query: { id, user: JSON.stringify({ name, surname, email, username, newUsername }), error: err.message }
            }))
        }

    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))
}
