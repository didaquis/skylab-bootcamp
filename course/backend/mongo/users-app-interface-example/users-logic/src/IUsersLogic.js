const { User } = require('users-data')

/**
 * Users Logic (business object) interface (contract)
 * 
 * Defines the business object that manages users logic
 * 
 * @version 1.0.0
 */
class IUsersLogic {
    /**
     * Constructs an instance
     * 
     * @param {UserData} userData - The users data store manager (must implement the interface)
     */
    constructor(userData) {
        if (new.target === IUsersLogic)
            throw Error('cannot instantiate')
    }

    /**
     * Registers a new user
     * 
     * @param {String} name 
     * @param {String} surname 
     * @param {String} email 
     * @param {String} username 
     * @param {String} password 
     * 
     * @returns {String} - id - The id of the new registered user
     * 
     * @throws {Error} - If user already exists (username), or any field is invalid
     */
    register(name, surname, email, username, password) {
        throw Error('not implemented')
    }

    /**
     * Retrieves a user by id
     * 
     * @param {String} id - The id of the user to retrieve
     * 
     * @returns {User} user - The retrieved user
     * 
     * @throws {Error} - If id not valid, or user not found
     */
    retrieve(id) {
        throw Error('not implemented')
    }

    /**
     * Updates a user by id and username and password validation
     * 
     * @param {String} id - The user id
     * @param {String} username - The current user username
     * @param {String} password - The current user password
     * @param {String} name - The user name
     * @param {String} surname - The user surname
     * @param {String} email - The user email
     * @param {String} newUsername - The new user username (optional)
     * @param {String} newPassword - The new user password (optional)
     *  
     * @throws {Error} - If id not valid, or any field not valid, or username already exists (newUsername), or current username and/or password do not match the ones stored (user access validation)
     */
    update(id, username, password, name, surname, email, newUsername, newPassword) {
        throw Error('not implemented')
    }

    /**
     * Destroys a user by id and username and password validation
     * 
     * @param {String} id - The user id 
     * @param {String} username - The current user username
     * @param {String} password - The current user password
     */
    destroy(id, username, password) {
        throw Error('not implemented')
    }

    /**
     * List all users
     */
    list() {
        throw Error('not implemented')
    }
}

module.exports = IUsersLogic