/**
 * taskApi (required endpoint at: http://127.0.0.1:4501 )
 *
 * @version 0.0.1
 */

const axios = require('axios');

let taskApi
(()=>{

	/**
	 * Make a request to external API
	 * 
	 * @param {String} method - http method (get, post, put, delete, patch...)
	 * @param {String} url - Url of query (base url and port is provided)
	 * @param {String} dataValue - Data to send
	 * @returns {Promise<Response>} Data received from endpoint
	 * @throws {String} If something go wrong
	 */
	function call(method, url, dataValue){
		const baseUrl = "http://127.0.0.1:4501";

		switch (method) {
			case 'get':
				return axios.get(`${baseUrl}${url}`)
					.then( result => { return result } );
				break;

			case 'post':
				return axios.post(`${baseUrl}${url}`, { text: dataValue })
					.then( result => { return result } );
				break;

			case 'put':
				return axios.put(`${baseUrl}${url}`)
					.then( result => { return result } );
				break;

			case 'delete':
				return axios.delete(`${baseUrl}${url}`)
					.then( result => { return result } );
		}
	}

	const inst = {

		/**
		 * Request for create new task
		 *
		 * @param {String} textValue - text for a new task.
		 * @returns {Promise<Response>} Data received from endpoint.
		 */
		createNewTask: (textValue) => {
			return call('post','/api/tasks/', textValue);
		},

		/**
		 * Request for all task
		 * @return {Promise<Response>} Data received from endpoint.
		 */
		requestAllTasks(){
			return call('get', '/api/tasks/all');
		},

		/**
		 * Request for mark as completed a task
		 * @param  {String} idTask 
		 * @return {Promise<Response>} Data received from endpoint.
		 */
		markTaskAsDone(idTask){
			let url = `/api/tasks/${idTask}`;
			return call('put', url);
		}, 

		/**
		 * Request for delete a task
		 * @param  {String} idTask
		 * @return {Promise<Response>} Data received from endpoint.
		 */
		deleteTask(idTask){
			let url = `/api/tasks/${idTask}`;
			return call('delete', url);
		}

	}

	taskApi = inst;
})()

module.exports = taskApi;
