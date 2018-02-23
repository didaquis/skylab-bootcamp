require('dotenv').config()

const express = require('express')

const bodyParser = require('body-parser')

const app = express()

const users = []

app.get('/api/users', (req, res) => res.json(ok('Users listing succeeded.', users.map(({ username }) => ({ username })))))

app.get('/api/users/:username', (req, res) => {
    //const username = req.params.username
    //const { username } = req.params
    const { params: { username } } = req

    let user

    for (let i = 0; i < users.length; i++) {
        const _user = users[i]

        if (_user.username === username) {
            user = _user

            break
        }
    }

    if (user) {
        res.json(ok('User retrieval succeeded.', { username: user.username }))
    } else {
        res.json(ko('User retrieval failed.', 'Username does not exist.'))
    }
})

const jsonBodyParser = bodyParser.json()

app.post('/api/users', jsonBodyParser, (req, res) => {
    const { username, password } = req.body

    if (!username || !password) return res.json(ko('User registration failed.', 'Invalid username and/or password.'))

    const alreadyExists = users.some(user => user.username === username)

    if (alreadyExists) return res.json(ko('User registration failed.', 'Username already exists.'))

    users.push({ username, password })

    res.json(ok('User registration succeeded.'))
})

app.put('/api/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    const { password, newPassword } = req.body

    if (!username || !password) return res.json(ko('User update failed.', 'Invalid username and/or password.'))

    const user = users.find(user => user.username === username)

    if (!user) return res.json(ko('User update failed.', 'Username does not exists.'))

    if (user.password === password) {
        user.password = newPassword
    
        res.json(ok('User update succeeded'))
    } else 
        res.json(ko('User update failed.', 'Wrong username and/or password.'))

})

app.delete('/api/users/:username', jsonBodyParser, (req, res) => {
    const { params: { username } } = req

    const { password } = req.body

    if (!username || !password) return res.json(ko('User deletion failed.', 'Invalid username and/or password.'))

    const index = users.findIndex(user => user.username === username)

    const user = users[index]

    if (!user) return res.json(ko('User deletion failed.', 'Username does not exists.'))

    if (user.password === password) {
        users.splice(index, 1)

        res.json(ok('User deletion succeeded'))
    } else 
        res.json(ko('User deletion failed.', 'Wrong username and/or password.'))
})

function ok(message, data) {
    const res = { status: 'OK', message }

    if (data) res.data = data

    return res
}

function ko(message, error) {
    const res = { status: 'KO', message }

    if (error) res.error = error

    return res
}

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))