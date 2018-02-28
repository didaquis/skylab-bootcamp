const uuidv4 = require('uuid/v4')
const Task = require('./Task')

/**
 * Task Data (storage handler)
 * 
 * @version 1.0.0
 */
class TaskData {
    /**
     * Constructs an instance
     * 
     * @param {Array} tasks - The array to store the tasks in
     */
    constructor(tasks) {
        this.tasks = tasks
    }

    /**
     * Validates task entity has the correct fields
     * 
     * @param {Task} task - The task to validate
     * 
     * @throws {Error} - If task fields are not valid
     */
    _validateTask(task) {
        if (typeof task !== 'object' || !task instanceof Task) throw Error(`task cannot be ${task}`)

        const { title, description, status } = task

        if (typeof title !== 'string' || title.trim().length === 0) throw Error(`title cannot be ${title}`)

        if (typeof description !== 'string' || description.trim().length === 0) throw Error(`description cannot be ${description}`)

        if (typeof status !== 'number') throw Error(`status cannot be ${status}`)
    }

    /**
     * Validates task id
     * 
     * @param {String} id 
     * 
     * @throws {Error} - If task id is not valid
     */
    _validateId(id) {
        if (typeof id !== 'string' || !id.trim().length) throw Error(`id cannot be ${id}`)
    }

    /**
     * Inserts a task in storage
     * 
     * @param {Task} - The task to insert in store
     * 
     * @throws {Error} - If task fields are not valid
     */
    insert(task) {
        this._validateTask(task)

        task.id = uuidv4()

        const _task = Task.from(task)

        this.tasks.push(_task)

        return task.id
    }

    /**
     * Retrieves a task by id
     * 
     * @param {String} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    retrieve(id) {
        this._validateId(id)

        // search the task
        const task = this.tasks.find(task => task.id === id)

        // if no task found, throw Error
        if (!task) throw Error(`no task found with id ${id}`)

        return Task.from(task)
    }

    /**
     * List tasks
     */
    list() { return this.tasks.map(task => Task.from(task)) }

    /**
     * Updates a task
     * 
     * @param {Task} - The task to update
     * 
     * @throws {Error} - If task not valid, or not found
     */
    update(task) {
        this._validateTask(task)

        this._validateId(task.id)

        // search the task
        const _task = this.tasks.find(__task => __task.id === task.id)

        // if no task found, throw Error
        if (!_task) throw Error(`no task found with id ${id}`)

        const { title, description, status } = task

        // update the task
        _task.title = title
        _task.description = description
        _task.status = status
    }

    /**
     * Deletes a task
     * 
     * @param {String} id - The task id 
     * 
     * @throws {Error} - If task id not valid, or task not found
     */
    delete(id) {
        this._validateId(id)
        
        const index = this.tasks.findIndex(task => task.id == id)

        if (index < 0) throw Error(`no task found with id ${id}`)

        this.tasks.splice(index, 1)
    }

    /**
     * Filter tasks by fields matching
     * 
     * @param {String} id - A task id to match
     * @param {String} title - A task title to match
     * @param {String} description - A task description to match
     * @param {Number} status - A task status to match
     */
    filter(id, title, description, status) {
        const tasks = this.tasks.filter(task => {
            let matches = true

            if (id) matches = matches && task.id === id

            if (title) matches = matches && task.title.includes(title)

            if (description) matches = matches && task.description.includes(description)

            if (typeof status !== 'undefined') matches = matches && task.status === status

            return matches
        })

        return tasks.map(task => Task.from(task))
    }
}

module.exports = TaskData