const User = require('./User')
const IUsersDataAsync = require('./IUsersDataAsync')
const uuidv4 = require('uuid/v4')
const fs = require('fs')

const model = new User()

/** 
 * Users Data on Disk (storage manager)
 * 
 * Manages users data in JSON file storage
 * 
 * @version 1.0.0
 */
class UsersDataDisk extends IUsersDataAsync {
    /**
     * Constructs an instance
     * 
     * @param {String} jsonFilePath - The path of the json file used to store users
     */
    constructor(jsonFilePath) {
        super()

        this.jsonFilePath = jsonFilePath
    }

    /**
     * Reads users data from json file  into array
     * 
     * @returns {Promise} - TODO
     */
    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.jsonFilePath, 'utf-8', (err, json) => {
                if (err) reject(err)

                const users = JSON.parse(json)

                resolve(users)
            })
        })
    }

    /** 
     * Write users data array to json file
     * 
     * @returns {Promise} - A promise that resolves if persisting succeeded, otherwise fails
     */
    write(users) {
        return new Promise((resolve, reject) => {
            const json = JSON.stringify(users, null, 4)

            fs.writeFile(this.jsonFilePath, json, 'utf-8', err => {
                if (err) return reject(err)

                resolve()
            })
        })
    }

    /**
     * Inserts a user
     * 
     * @see IUsersDataAsync.insert
     */
    insert(user) {
        return new Promise((resolve, reject) => {
            User.validate(user)

            const id = uuidv4()

            user.id = id

            this.read()
                .then(users => {
                    users.push(user)

                    return this.write(users)
                })
                .then(() => id)
                .then(resolve)
                .catch(reject)
        })
    }

    /**
     * Retrieves a user
     * 
     * @param {String} id - The id of the user to retrieve
     * 
     * @returns {Promise<User>} promise - TODO (user - The retrieved user)
     */
    retrieve(id) {
        return new Promise((resolve, reject) => {
            User.validateId(id)

            this.read()
                .then(users => {
                    const user = users.find(user => user.id === id)

                    if (user) return resolve(user)

                    reject(Error('user does not exist'))
                })
                .catch(reject)
        })
    }

    /**
     * Updates a user
     * 
     * @param {User} user - The user to update
     * 
     * @returns {Promise} - TODO
     */
    update(user) {
        return new Promise((resolve, reject) => {
            const { id } = user

            User.validateId(id)
            User.validate(user)

            this.read()
                .then(users => {
                    const _user = users.find(user => user.id === id)

                    if (_user) {
                        User.copy(_user, user)

                        return this.write(users)

                    } else reject(Error('user does not exist'))
                })
                .then(resolve)
                .catch(reject)
        })
    }

    /**
     * Deletes a user
     * 
     * @param {User} user - The user to delete
     * 
     * @returns {Promise} - TODO
     */
    delete(id) {
        // TODO 
        const index = users.findIndex(user => user.id === id)

        if (index < 0) throw Error('user does not exist')

        this.users.splice(index, 1)
    }

    /** 
     * List users
     * 
     * @returns {Promise<Array<User>>} - TODO All users in array
     */
    list() { return this.read() }

    /**
     * Returns filtered users that match the fields of the input user
     * 
     * @param {User} user - The user the fields of which are used to filter results
     */
    filter(user) {
        return this.read()
            .then(users => users.filter(_user => User.match(_user, user)))
    }
}

module.exports = UsersDataDisk