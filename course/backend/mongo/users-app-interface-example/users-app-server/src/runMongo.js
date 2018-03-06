const { MongoClient } = require('mongodb')

function runMongo(host, port, dbname, callback) {
    MongoClient.connect(`mongodb://${host}:${port}`, (err, conn) => {
        if (err) callback(err)
        
        console.log(`mongo running in address ${host}:${port}`)
    
        process.on('SIGINT', () => {
            console.log('\nstopping mongo')
    
            conn.close()
    
            process.exit()
        })

        const db = conn.db(dbname)

        callback(undefined, db)
    })
}

module.exports = runMongo