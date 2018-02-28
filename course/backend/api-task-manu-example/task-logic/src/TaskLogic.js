const Task = require('../../task-data/src/Task')

/** 
 * Task Logic (business object)
 * 
 * @version 1.0.0
 */
class TaskLogic {
    /**
     * Constructs an instance
     * 
     * @param {TaskData} taskData - The tasks data storage handler
     */
    constructor(taskData) {
        this.taskData = taskData
    }

    /**
     * Creates a task
     * 
     * @param {String} title - The task title
     * @param {String} description - The task description
     */
    create(title, description) {
        return this.taskData.insert(new Task(undefined, title, description, Task.TODO))
    }

    /**
     * Retrieves a task
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    retrieve(id) {
        return this.taskData.retrieve(id)
    }

    /**
     * Updates a task
     * 
     * @param {Number} id - The task id
     * @param {String} title - The task title
     * @param {String} description - The task description
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    update(id, title, description) {
        const task = this.taskData.retrieve(id)

        task.title = title
        task.description = description

        this.taskData.update(task)
    }

    /**
     * Marks task as DOING
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    markDoing(id) {
        const task = this.taskData.retrieve(id)

        task.status = Task.DOING

        this.taskData.update(task)
    }

    /**
     * Marks task as DONE
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    markDone(id) {
        const task = this.taskData.retrieve(id)

        task.status = Task.DONE

        this.taskData.update(task)
    }

    /**
     * Marks task as REVIEW
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    markReview(id) {
        const task = this.taskData.retrieve(id)

        task.status = Task.REVIEW

        this.taskData.update(task)
    }

    /**
     * Marks task as TODO
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    markTodo(id) {
        const task = this.taskData.retrieve(id)

        task.status = Task.TODO

        this.taskData.update(task)
    }
    /** 
     * List tasks
     */
    list() {
        return this.taskData.list()
    }

    /** 
     * List tasks in TODO
     */
    listTodos() {
        return this.taskData.filter(undefined, undefined, undefined, Task.TODO)
    }

    /** 
     * List tasks in DOING
     */
    listDoings() {
        return this.taskData.filter(undefined, undefined, undefined, Task.DOING)
    }

    /** 
     * List tasks in REVIEW
     */
    listReviews() {
        return this.taskData.filter(undefined, undefined, undefined, Task.REVIEW)
    }

    /** 
     * List tasks in DONE
     */
    listDones() {
        return this.taskData.filter(undefined, undefined, undefined, Task.DONE)
    }

    /**
     * Removes a task
     * 
     * @param {Number} id - The task id
     * 
     * @throws {Error} - If task id is not valid, or task not found
     */
    remove(id) {
        return this.taskData.delete(id)
    }
}

module.exports = TaskLogic