/**
 * Users API client.
 * 
 * @version 0.1
 */
let usersApi;
(() => {

	/**
	 * Make a request to USERS API SERVER
	 * 
	 * @param {String} url - url of query
	 * @param {String} method - http method
	 * @param {String} body - body to send
	 * @returns {Promise<Response>} Data received from endpoint
	 * @throws {String} If something go wrong
	 */
	function call(url, method, body) {
		const baseUrl = "http://localhost:5000/";

		switch (method) {
			case 'get':
				return fetch(`${baseUrl}${url}`)
					.then( res => res.json() );
				/* No es necesario el 'break' ya que hay un return */

			case 'post':
				return fetch(`${baseUrl}${url}`,
						{ method: "POST", headers: 
							{
							    'Accept': 'application/json, text/plain, */*',
							    'Content-Type': 'application/json'
  							}, 
	  					body: body
	  					})
					.then( res => res.json() );
				/* No es necesario el 'break' ya que hay un return */
		}
	}

	const inst = {
		
		listAllUsers: () =>{
			return call('api/users/', 'get');
		},

		retrieveUser: (id) =>{
			return call(`api/user/${id}`, 'get');
		}, 

		registerUser: (name, surname, email, username, password) => {
			const body = {
				"name": name,
				"surname": surname,
				"email": email,
				"username": username,
				"password": password
			};
			return call('api/user', 'post', JSON.stringify(body));
		}
	
	};

	usersApi = inst;
})();

export default usersApi;
