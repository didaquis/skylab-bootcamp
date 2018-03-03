require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { User, MongoUserData, AsyncUserLogic } = require('user-logic')
const url = require('url')
const mongo = require('./mongo')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT

mongo(host, port, 'bootcamp', init)

function init(err, db) {
    if (err) throw err

    const userLogic = new AsyncUserLogic(new MongoUserData(db))

    const app = express()

    app.set('view engine', 'pug')

    app.get('/', (req, res) => {
        let { query: { id, user, error } } = req

        if (user) user = JSON.parse(user)

        const users = userLogic.list().then(users => {
            res.render('index', { id, user, error, users })
        })
    })

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    app.post('/register', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        userLogic.register(name, surname, email, username, password)
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

        userLogic.retrieve(id)
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

        userLogic.update(id, username, password, name, surname, email, newUsername, newPassword)
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

    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))
}
