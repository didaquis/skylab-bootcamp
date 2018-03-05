require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const uuid = require('uuid/v4')
const { success, fail } = require('./api-utils')

const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
const database = process.env.MONGO_DB
const collection = process.env.MONGO_COL

MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
    if (err) throw err

    const db = conn.db(database)

    const app = express()

    app.get('/api/users', (req, res) => {
        db.collection(collection).find().project({ _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1 }).toArray((err, users) => {
            if (err) return res.json(fail(err))

            res.json(success(users))
        })
    })

    const jsonBodyParser = bodyParser.json()

    function validate(user) {
        for (const prop in user) {
            const value = user[prop]

            if (typeof value === 'undefined' || !value.trim().length) throw Error(`${prop} cannot be undefined or empty`)
        }
    }

    app.post('/api/user', jsonBodyParser, (req, res) => {
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
                    .then(() => id)
            })
            .then(id => {
                res.json(success({ id }))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.put('/api/user/:id', jsonBodyParser, (req, res) => {
        const { body: { name, surname, email, username, password, newUsername, newPassword } } = req
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id, name, surname, email, username, password, newUsername, newPassword })

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
                res.json(success())
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.delete('/api/user/:id', jsonBodyParser, (req, res) => {
        const { body: { username, password } } = req
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id, username, password })

                return db.collection(collection).findOne({ username })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                if (user.id !== id) throw Error('user id does not match the one provided')

                if (user.username !== username || user.password !== password) throw Error('username and/or password wrong')

                return db.collection(collection).deleteOne({ id })
            })
            .then(() => {
                res.json(success())
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    app.get('/api/user/:id', (req, res) => {
        const { params: { id } } = req

        Promise.resolve()
            .then(() => {
                validate({ id })

                return db.collection(collection).findOne({ id }, { projection: { _id: 0, password: 0 } })
            })
            .then(user => {
                if (!user) throw Error('user does not exist')

                res.json(success(user))
            })
            .catch(err => {
                res.json(fail(err.message))
            })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`users api running on port ${port}`))
})