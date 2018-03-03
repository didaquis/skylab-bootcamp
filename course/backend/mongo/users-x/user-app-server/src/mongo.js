const { MongoClient } = require('mongodb')

function init(host, port, dbname, callback) {
    MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
        if (err) callback(err)
        
        console.log(`running mongo in address ${host}:${port}`)
    
        process.on('SIGINT', () => {
            console.log('stopping mongo')
    
            conn.close()
    
            process.exit()
        })

        const db = conn.db(dbname)

        callback(undefined, db)
    })
}

module.exports = init