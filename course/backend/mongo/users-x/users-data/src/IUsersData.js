/** 
 * Users Data (storage manager) interface (contract)
 * 
 * Defines a storage manager for users data
 * 
 * @version 1.0.0
 */
class IUserData {
    /** 
     * Constructs an instance (not allowed in this interface)
     */
    constructor() {
        if (new.target === IUserData)
            throw Error('cannot instantiate')
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
        throw Error('not implemented')
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
        throw Error('not implemented')
    }

    /**
     * Updates a user
     * 
     * @param {User} user - The user to update
     * 
     * @throws {Error} - If not valid id, not valid user, or user not found
     */
    update(user) {
        throw Error('not implemented')
    }

    /**
     * Deletes a user
     * 
     * @param {User} user - The user to delete
     * 
     * @throws {Error} - If not valid id, or user not found
     */
    delete(id) {
        throw Error('not implemented')
    }

    /** 
     * List users
     * 
     * @returns {Array<User>} - All users in array
     */
    list() {
        throw Error('not implemented')
    }

    /**
     * Returns filtered users that match the fields of the input user
     * 
     * @param {User} user - The user the fields of which are used to filter results
     */
    filter(user) {
        throw Error('not implemented')
    }
}

module.exports = IUserData