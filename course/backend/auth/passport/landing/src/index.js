require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/User')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const jwt = require('jsonwebtoken')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl)

const auth = express.Router()

const jsonBodyParser = bodyParser.json()

auth.post('/register', jsonBodyParser, (req, res) => {
    const { body: { username, password } } = req

    User.create({ username, password })
        .then(() => res.json({
            status: 'OK'
        }))
        .catch(err => res.json({
            status: 'KO',
            error: err.message
        }))
})

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username, password })
        .then(user => {
            if (!user) return done(undefined, false)

            done(undefined, user)
        })
        .catch(done)
}))

const secret = process.env.JWT_SECRET

auth.post('/login', [jsonBodyParser, passport.authenticate('local', { session: false })], (req, res) => {
    const { user: { _id, username } } = req

    const token = jwt.sign({
        id: _id,
        username
    }, secret)

    res.json({
        status: 'OK',
        data: {
            token
        }
    })
})

passport.use(new JwtStrategy({
    secretOrKey: secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (payload, done) => {
    const { id } = payload

    User.findById(id)
        .then(user => done(undefined, user ? user : false))
        .catch(done)
}))

const api = express.Router()

api.use(passport.authenticate('jwt', { session: false }))

api.route('/helloworld')
    .get((req, res) => {
        res.json({
            status: 'OK',
            data: {
                message: `Hello, ${req.user.username}!`
            }
        })
    })

const app = express()

app.use(passport.initialize())

app.use('/auth', auth)

app.use('/api', api)

const port = process.env.PORT

app.listen(port, () => console.log(`api server running on port ${port}`))