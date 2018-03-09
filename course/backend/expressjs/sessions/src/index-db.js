const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)

const app = express()

mongoose.connect('mongodb://localhost:27017/test');

app.use(session({
    secret: 'a big secret',
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Access the session as req.session
app.get('/', function (req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
})

app.listen(8080, () => console.log('server running on port 8080'))