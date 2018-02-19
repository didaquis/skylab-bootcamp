const fs = require('fs')
const path = require('path')

const _path = process.argv[2]
const ext = process.argv[3]

// fs.readdir(_path, (err, files) => {
//     if (err) throw err

//     files.forEach(file => {
//         if (path.extname(file) === `.${ext}`) console.log(file) // WHAT happens with hidden file '.txt'?
//     })
// })

fs.readdir(_path, (err, files) => {
    if (err) throw err

    const filtered = files.filter(file => {
        return path.extname(file) === `.${ext}` // WHAT happens with hidden file '.txt'?
    })

    //filtered.forEach(console.log) // WARN! console.log accepts all arguments provided by forEach (current, index, array), so output is -> filtered-ls.js [sm]:22 helloworld.txt 0 ["helloworld.txt"]
    filtered.forEach(file => console.log(file))
})