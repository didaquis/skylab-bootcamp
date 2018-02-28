const axios = require('axios')
const url = require('url')

class TaskApi {
    constructor(protocol, host, port) {
        this.baseUrl = `${protocol}://${host}`

        if (port) this.baseUrl += `:${port}`

        this.baseUrl += '/api/'
    }

    /**
     * Creates a task
     * 
     * @param {String} title - The task title
     * @param {String} description - The task description
     * 
     * @returns {Promise<Response>}
     */
    create(title, description) {
        return data(axios.post(url.resolve(this.baseUrl, 'task'), { title, description }))
    }

    list() {
        return data(axios.get(url.resolve(this.baseUrl, 'tasks')))
    }

    retrieve(id) {
        return data(axios.get(url.resolve(this.baseUrl, `task/${id}`)))
    }

    remove(id) {
        return data(axios.delete(url.resolve(this.baseUrl, `task/${id}`)))
    }

    markDoing(id) {
        return data(axios.put(url.resolve(this.baseUrl, `task/${id}/DOING`)))
    }

    listDoing() {
        return data(axios.get(url.resolve(this.baseUrl, 'tasks/DOING')))
    }

    markReview(id) {
        return data(axios.put(url.resolve(this.baseUrl, `task/${id}/REVIEW`)))
    }

    listReview() {
        return data(axios.get(url.resolve(this.baseUrl, 'tasks/REVIEW')))
    }

    markDone(id) {
        return data(axios.put(url.resolve(this.baseUrl, `task/${id}/DONE`)))
    }

    listDone() {
        return data(axios.get(url.resolve(this.baseUrl, 'tasks/DONE')))
    }

    markTodo(id) {
        return data(axios.put(url.resolve(this.baseUrl, `task/${id}/TODO`)))
    }

    listTodo() {
        return data(axios.get(url.resolve(this.baseUrl, 'tasks/TODO')))
    }
}

/**
 * Simplifies all axios calls, by extracting the data field
 * 
 * @example It simplifies, for example, this: axios.get(url.resolve(this.baseUrl, 'tasks/TODO')).then(res => res.data)
 * 
 * @param {Promise} resp - The promise to extract data from
 * 
 * @returns {Promise<Response>}
 */
function data(resp) {
    return resp.then(res => res.data)
}

module.exports = TaskApi