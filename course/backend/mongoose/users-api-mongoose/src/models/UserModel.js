const mongoose = require('mongoose');

const User = mongoose.model('User', 
		{	
			id: String, 
			name: String, 
			surname: String, 
			email: String, 
			username: String, 
			password: String, 
			dateRegister: String 
		}, 'users-collection'
	); /* Construyo el model y establezco la colección donde almacenaré estos documentos */

module.exports = User;