require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const formBodyParser = bodyParser.urlencoded({ extended: false })

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

/*

/ -> landing / login

/login (username / password) 
    OK -> /welcome
    KO -> /login-error

/welcome

/login-error

*/

const state = {
    loggedIn: false,
    name: 'Shakti',
    surname: 'Maan'
}

app.get('/', (req, res) => {
    if (state.loggedIn)
        return res.redirect('/welcome')

    res.render('index')
})

app.post('/login', formBodyParser, (req, res) => {    
    const { username, password } = req.body

    if (username === 'shaktimaan' && password === '123') {
        state.loggedIn = true

        res.redirect('/welcome')
    } else {
        res.redirect('/login-error')
    }
})

app.get('/welcome', (req, res) => {
    if (state.loggedIn)
        res.render('welcome', { name: state.name })
    else
        res.redirect('/')
})

app.get('/login-error', (req, res) => {
    res.render('login-error')
})

app.get('/logout', (req, res) => {
    state.loggedIn = false

    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))