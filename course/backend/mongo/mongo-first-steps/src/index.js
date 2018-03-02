const { MongoClient } = require('mongodb'); /* instalamos este módulo y lo importamos */

/* Conectamos con el servidor */
MongoClient.connect('mongodb://localhost:27017/', (err, connection) => {

	if(err) {
		throw err;
	}

	const db = connection.db('bootcamp'); /* Le especificamos la base de datos con la que queremos trabajar */

	// Un ejemplo de como insertar un registro:
	//db.collection('staff').insert({name: "Dídac", surname: "García"});

	/* Realizamos una búsqueda de todos los registros */
	db.collection('staff').find().toArray((err, data) => {
		if(err) {
			throw err;
		}

		console.log(data);
		connection.close(); /* Esto cierra la conexión con el servidor */
	})

})

process.on('SIGINT', () =>{
	/* Detectamos el cierre del proceso de Node */
	console.log('Stopping server');

	/* Cerramos la conexión a la base de datos para evitar que se quede abierta */
	connection.close();

	/* Finalizamos las instrucciones que queremos ejecutar al detectar el cierre del proceso de Node */
	process.exit();
})


/* Obviamente debes tener el servidor mongodb arrancado */