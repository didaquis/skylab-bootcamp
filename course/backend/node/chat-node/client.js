const net = require('net');


const client = new net.Socket();

const port = process.argv[2] || 4048;
const ip = process.argv[3] || '127.0.0.1';
const message = process.argv[4] || '';

client.connect(port, ip, () => {
	//console.log('Connected');
	client.write(message);
});

client.on('data', data => console.log( data.toString() ))

client.on('close', () => {
	console.log('Connection closed\n');
});

/* Fíjate que debemos especificar puerto, IP y mensaje */