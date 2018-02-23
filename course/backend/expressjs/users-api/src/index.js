/**
 * Users API
 * 
 * @version 3.0.0
 */

require('dotenv').config()

const express = require('express')

const userRouter = require('./api/userRouter')

const app = express()

app.use('/api', userRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Users API running on port ${port}`))