/** 
 * Task entity
 */
class Task {
    /**
     * 
     * @param {String} id - The task id
     * @param {String} title - The task title
     * @param {String} description - The task description
     * @param {Number} status - The task status
     */
    constructor(id, title, description, status) {
        this.id = id
        this.title = title
        this.description = description
        this.status = status
    }

    /**
     * Clones a task
     * 
     * @param {Taks} param0 - The task to clone from 
     */
    static from({id, title, description, status}) {
        return new Task(id, title, description, status)
    }
}

Task.TODO = 0
Task.DOING = 1
Task.REVIEW = 2
Task.DONE = 3

// Task.from = function({id, title, description, status}) {
//     return new Task(id, title, description, status)
// }

module.exports = Task