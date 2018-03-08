const IUsersData = require('./IUsersData')

/** 
 * Users Data Sync(hronous) interface (contract)
 * 
 * Defines a synchronous storage manager for users data
 * 
 * @version 1.0.0
 */
class IUsersDataSync extends IUsersData {
    /** 
     * Constructs an instance (not allowed in this interface)
     */
    constructor() {
        super()
        
        if (new.target === IUsersDataSync)
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
        super.insert()
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
        super.retrieve()
    }

    /**
     * Updates a user
     * 
     * @param {User} user - The user to update
     * 
     * @throws {Error} - If not valid id, not valid user, or user not found
     */
    update(user) {
        super.update()
    }

    /**
     * Deletes a user
     * 
     * @param {User} user - The user to delete
     * 
     * @throws {Error} - If not valid id, or user not found
     */
    delete(id) {
        super.delete()
    }

    /** 
     * List users
     * 
     * @returns {Array<User>} - All users in array
     */
    list() {
        super.list()
    }

    /**
     * Returns filtered users that match the fields of the input user
     * 
     * @param {User} user - The user the fields of which are used to filter results
     */
    filter(user) {
        super.filter()
    }
}

module.exports = IUsersDataSync