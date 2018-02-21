const fs = require('fs')

/**
 * Unix-like cp.
 * 
 * Copies files from a path to another.
 * 
 * 
 * @example cp('origin.txt', 'destinty.txt')
 * 
 * @version 1.0.0
 * 
 * @param {String} from - The origin path to copy from.
 * @param {String} to - The destiny path to copy to.
 */
function cp(from, to) {
    if (!from) throw Error('no origin path specified')
    if (!to) throw Error('no destiny path specified')

    if (!fs.existsSync(from)) throw Error('origin path does not exist')
    if (fs.existsSync(to)) throw Error('destiny path already exists')

    console.log(process.memoryUsage())

    fs.readFile(from, function (err, data) {
        if (err) throw err

        fs.writeFile(to, data, function (err) {
            if (err) throw err

            console.log(process.memoryUsage())
        })
    })
}

module.exports = cp