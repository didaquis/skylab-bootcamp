require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const path = require('path')
const uuid = require('uuid/v4')
const url = require('url')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
    if (err) throw err

    const db = conn.db(database)

    const app = express()

    app.set('view engine', 'pug')

    app.set('views', path.join(process.cwd(), 'pug_views'));

    app.get('/', (req, res) => {
        db.collection(collection).find().toArray((err, users) => {
            if (err) throw err

            let { query: { id, error, user } } = req

            if (user) user = JSON.parse(user)

            res.render('index', { users, id, error, user })
        })
    })

    const formBodyParser = bodyParser.urlencoded({ extended: false })

    function validate(user) {
        for (const prop in user) {
            const value = user[prop]

            if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or empty`)
        }
    }

    app.post('/register', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password })

                return db.collection(collection).findOne({ username })
            })
            .then(user => {
                if (user) throw Error('username already exists')

                const id = uuid()

                return db.collection(collection).insert({ id, name, surname, email, username, password })
            })
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: '/',
                    query: { error: err.message, user: JSON.stringify({ name, surname, email, username }) }
                }))
            })
    })

    app.get('/edit/:id', (req, res) => {
        const { params: { id } } = req

        res.redirect(url.format({ // ?id=...
            pathname: '/',
            query: { id }
        }))
    })

    app.post('/save/:id', formBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ name, surname, email, username, password, newUsername, newPassword })

                return db.collection(collection).findOne({ username: newUsername })
            })
            .then(user => {
                if (user) throw Error('username already exists')

                return db.collection(collection).findOne({ id })
            })
            .then(user => {
                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return db.collection(collection).updateOne({ id }, { $set: { name, surname, email, username: newUsername, password: newPassword } })
            })
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect(url.format({
                    pathname: '/',
                    query: { error: err.message, id, user: JSON.stringify({ name, surname, email, username, newUsername }) }
                }))
            })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`users app running on port ${port}`))
})