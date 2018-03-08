const { success, fail } = require('../../utils/api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, username, password } } = req

    logic.register(name, surname, email, username, password)
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}