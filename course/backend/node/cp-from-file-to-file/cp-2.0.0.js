const fs = require('fs')

/**
 * Unix-like cp.
 * 
 * Copies files from a path to another.
 * 
 * 
 * @example cp('origin.txt', 'destinty.txt')
 * 
 * @version 2.0.0
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

    const rs = fs.createReadStream(from)
    const ws = fs.createWriteStream(to)

    rs.on('data', chunk => ws.write(chunk))

    //rs.on('end', () => ws.end())

    rs.on('end', () => {
        ws.end()

        console.log(process.memoryUsage())
    })
}

module.exports = cp