const User = require('./User')
const IUsersDataSync = require('./IUsersDataSync')
const uuidv4 = require('uuid/v4')

const model = new User()

/** 
 * Users Data on Memory (storage manager)
 * 
 * Manages users data in Array storage
 * 
 * @version 1.0.0
 */
class UsersDataMemory extends IUsersDataSync {
    /**
     * Constructs an instance
     * 
     * @param {Array} users - The array used to store users
     */
    constructor(users) {
        super()

        this.users = users
    }

    /**
     * Inserts a user
     * 
     * @param {User} user - The user to insert
     * 
     * @returns {String} id - The inserted user id
     * 
     * @throws {Error} - If user not valid
     */
    insert(user) {
        User.validate(user)

        const id = uuidv4()

        user.id = id

        this.users.push(User.clone(user))

        return id
    }

    /**
     * Retrieves a user
     * 
     * @param {String} id - The id of the user to retrieve
     * 
     * @returns {User} user - The retrieved user
     * 
     * @throws {Error} - If not valid id or user not found
     */
    retrieve(id) {
        User.validateId(id)

        const user = this.users.find(user => user.id === id)

        if (user) return User.clone(user)

        throw Error('user does not exist')
    }

    /**
     * Updates a user
     * 
     * @param {User} user - The user to update
     * 
     * @throws {Error} - If not valid id, not valid user, or user not found
     */
    update(user) {
        const { id } = user

        User.validateId(id)
        User.validate(user)

        const _user = this.users.find(user => user.id === id)

        if (_user) return _user.copy(user)

        throw Error('user does not exist')
    }

    /**
     * Deletes a user
     * 
     * @param {User} user - The user to delete
     * 
     * @throws {Error} - If not valid id, or user not found
     */
    delete(id) {
        const index = this.users.findIndex(user => user.id === id)

        if (index < 0) throw Error('user does not exist')

        this.users.splice(index, 1)
    }

    /** 
     * List users
     * 
     * @returns {Array<User>} - All users in array
     */
    list() { return this.users.map(user => User.clone(user)) }

    /**
     * Returns filtered users that match the fields of the input user
     * 
     * @param {User} user - The user the fields of which are used to filter results
     */
    filter(user) { return this.users.filter(_user => _user.matches(user)).map(user => User.clone(user)) }
}

module.exports = UsersDataMemory