const fs = require('fs')
const path = require('path')

function filteredLs(_path, ext, callback) {
    fs.readdir(_path, (err, files) => {    
        if (err) return callback(err)

        const filtered = files.filter(file => {
            return path.extname(file) === `.${ext}` // WHAT happens with hidden file '.txt'?
        })
    
        callback(undefined, filtered)
    })
}

module.exports = filteredLs
//export default filteredLs