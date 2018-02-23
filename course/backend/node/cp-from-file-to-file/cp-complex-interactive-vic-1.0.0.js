const fs = require('fs')
const rl = require('readline')
const path = require('path')
const [node, ourPath, fromPath, toPath] = process.argv
const nameEjecutor = process.env.LOGNAME

const ask = function (question, callback) {
   var prompt = rl.createInterface({
       input: process.stdin,
       output: process.stdout
   })

   prompt.question(question + '\n', answer => {
       callback(answer)

       prompt.close()
   })
}

if (!fs.existsSync(fromPath)) return console.error(`🚨 ${fromPath} incorrect path`)
if (fs.existsSync(toPath)) return console.error(`🚨 Ey! ${path.basename(toPath)} exist!!`)

ask(`\nHello ${nameEjecutor} ✨ you want CP 📂 ${fromPath} to 📂 ${toPath} ? [YES : NO]`, function (answer) {

   if (answer.toLowerCase() === 'yes' || answer === '') {
       const fileContent = fs.readFileSync(fromPath)
       const streamTofile = fs.createWriteStream(toPath)

       streamTofile.once('open', () => {
           streamTofile.write(fileContent)
           streamTofile.end()
       })
   }
})

