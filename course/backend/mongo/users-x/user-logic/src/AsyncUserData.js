const UserData = require('./UserData')

/** 
 * Async(hronous) User Data (storage manager) interface
 * 
 * @version 1.0.0
 */
class AsyncUserData extends UserData {
    /** 
     * Constructs an instance (not allowed in this interface)
     */
    constructor() {
        super()
        
        if (new.target === AsyncUserData)
            throw Error('cannot instantiate')
    }

    /**
     * Inserts a user
     * 
     * @param {User} user - The user to insert
     * 
     * @returns {Promise<String>} - A promise that resolves the inserted user id, or rejects if user not valid
     */
    insert(user) {
        super.insert()
    }

    /**
     * Retrieves a user
     * 
     * @param {String} id - The id of the user to retrieve
     * 
     * @returns {Promise<User>} - A promise that resolves the retrieved user, or rejects if not valid id or user not found
     */
    retrieve(id) {
        super.retrieve()
    }

    /**
     * Updates a user
     * 
     * @param {User} user - The user to update
     * 
     * @returns {Promise} - A promise that resolves when user is updated, or rejects if user id not valid, or user not valid, or user not found
     */
    update(user) {
        super.update()
    }

    /**
     * Deletes a user
     * 
     * @param {User} user - The user to delete
     * 
     * @returns {Promise} - A promise that resolves when user is deleted, or rejects if user id not valid, or user not found
     */
    delete(id) {
        super.delete()
    }

    /** 
     * List users
     * 
     * @returns {Promise<Array<User>>} - A promise that resolves all users in array, or rejects if any unexpected error
     */
    list() {
        super.list()
    }

    /**
     * Returns filtered users that match the fields of the input user
     * 
     * @returns {Promise<Array<User>>} - A promise that resolves filtered users in array, or rejects if any unexpected error
     */
    filter(user) {
        super.filter()
    }
}

module.exports = AsyncUserData