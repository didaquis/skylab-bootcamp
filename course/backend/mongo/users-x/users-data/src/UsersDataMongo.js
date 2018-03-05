const User = require('./User')
const IUsersDataAsync = require('./IUsersDataAsync')
const uuidv4 = require('uuid/v4')

const model = new User()

/** 
 * Users Data on Mongo (storage manager) 
 * 
 * Manages users data in Mongo DB storage
 * 
 * @version 1.0.0
 */
class UsersDataMongo extends IUsersDataAsync {
    /**
     * Constructs an instance
     * 
     * @param {MongoClient} db - The Mongo db client
     */
    constructor(db) {
        super()

        this.db = db
    }

    collection() {
        return this.db.collection('users')
    }

    insert(user) {
        return new Promise((resolve, reject) => {
            User.validate(user)

            const id = uuidv4()

            user.id = id
            
            this.collection().insertOne(user)
                .then(user => resolve(id))
                .catch(reject)
        })
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            User.validateId(id)

            this.collection().findOne({ id })
                .then(user => {
                    if (!user) return reject(Error('user does not exist'))

                    resolve(user)
                })
                .catch(reject)
        })
    }

    update(user) {
        return new Promise((resolve, reject) => {
            const { id } = user

            User.validateId(id)
            User.validate(user)

            this.collection().updateOne({ id }, { $set: user })
                .then(resolve)
                .catch(reject)
        })
    }

    delete(id) {
        // TODO convert to mongo!

        const index = this.db.findIndex(user => user.id === id)

        if (index < 0) throw Error('user does not exist')

        this.db.splice(index, 1)
    }

    list() {
        return new Promise((resolve, reject) => {
            this.collection().find().toArray((err, users) => {
                if (err) return reject(err)

                resolve(users)
            })
        })
    }

    filter(user) {
        // TODO filter in mongo, instead of using all data
        return this.list()
            .then(users => users.filter(_user => User.match(_user, user)))
    }
}

module.exports = UsersDataMongo