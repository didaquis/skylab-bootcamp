const exec = require('child_process').exec

//const target = 'runAppMemory'
//const target = 'runAppDisk'
const target = 'runAppMongo'

exec(`node src/${target}`, (error, stdout, stderr) => {
    console.log('stdout', stdout)
    console.error('stderr', stderr)

    if (error !== null) {
        console.error(error);
    }
})