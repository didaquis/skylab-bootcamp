require('dotenv').config()

const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/:name', (req, res) => {
    res.render('index', { name: req.params.name})
})

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))