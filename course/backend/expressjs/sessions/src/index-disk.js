const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const app = express()

app.use(session({ 
    secret: 'keyboard cat', 
    cookie: { maxAge: 60000 },
    //resave: true,
    //saveUninitialized: true,
    store: new FileStore()
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