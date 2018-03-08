const { success, fail } = require('../../utils/api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    logic.list()
        .then(users => res.json(success(users)))
        .catch(err => res.json(fail(err.message)))
}