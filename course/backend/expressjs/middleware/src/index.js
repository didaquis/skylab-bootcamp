require('dotenv').config()

const express = require('express')

const logger = require('winston') // OR require('logger')

logger.add(logger.transports.File, { filename: 'server.log' });
logger.remove(logger.transports.Console);

const app = express()

app.get('/favicon.ico', (req, res) => res.send('sorry, no favicon here!'))

/**
 * Parses the query string json parameter (if exist) into query.obj property for later use (in next middlewares).
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function queryStringJsonParser(req, res, next) {
    try {
        req.query.obj = JSON.parse(req.query.json)
    } catch (err) {
        logger.error(err.message)
    }

    next()
}

app.use(queryStringJsonParser)

/**
 * Logs the query object.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function queryLogger(req, res, next) {
    logger.info(req.query)

    next()
}

app.use(queryLogger)

/**
 * Validates credentials passed in through query string json parameter.
 * 
 * @example VALID credentials -> http://localhost:5000/holamundo?json={"username":"shaktimaan","password":"123"}
 * @example INVALID credentials -> http://localhost:5000/holamundo?json={"username":"shaktimaan","password":"456"}
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function queryCredentialsValidator(req, res, next) {
    const { query: { obj } } = req

    // LET's passing on if credentials are right, OTHERWISE returns a "not allow" message.
    if (obj && obj.username === 'shaktimaan' && obj.password === '123')
        next()
    else
        res.send('You are not allowed to pass in!')
}

app.use(queryCredentialsValidator)

// OPTIONAL parameter in route! SEE what happens on following urls:
// 1) with something -> http://localhost:5000/holamundo?json={"username":"shaktimaan","password":"123"}
// 2) without something -> http://localhost:5000?json={"username":"shaktimaan","password":"123"}
app.get('/:something?', (req, res, next) => {
    res.send(req.params.something || 'nothing passed here!')
})

const port = process.env.PORT

app.listen(port, () => logger.info(`server running on port ${port}`))