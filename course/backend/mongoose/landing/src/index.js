const mongoose = require('mongoose')
const uuid = require('uuid/v4')

mongoose.connect('mongodb://localhost/landing-mongoose')

/* Definimos el modelo */
const User = mongoose.model('User', { id: String, name: String, surname: String, email: String, username: String, password: String })

/* creamos un nuevo usuario */
const mario = new User({
	id: uuid(),
	name: 'mario',
	surname: 'sanchez',
	email: 'mario@sanchez.com',
	username: 'marSan',
	password: 'patata123'
})

/* Ahora guardamos en la base de datos a nuestro usuario */
mario.save()
	.then(console.log)
	.catch(console.error)


/* Esto es otra manera de hacerlo, directamente en una sola instrucción. */
User.create({
	id: uuid(),
	name: 'n',
	surname: 's',
	email: 'e',
	username: 'u2',
	password: 'p'
})

/* Buscar (projection) */
User.find({ username: 'n' }, { _id: 0, id: 1, name: 1, surname: 1, email: 1, username: 1 })
	.then(console.log)
	.catch(console.error)


User.find({ username: 'n' })
	.then(([user]) => {
		return user.remove()
	})
	.then(console.log)
	.catch(console.error)


