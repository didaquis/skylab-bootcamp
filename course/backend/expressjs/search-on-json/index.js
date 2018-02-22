const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const fs = require('fs');

const jsonBodyParser = bodyParser.json();

const staffData = require('./staff.json');


app.get('/api/staff', jsonBodyParser, (req, res) => {

	let filteredStuffData = staffData.filter((staff) => {
		if(staff.name === req.query.q){
			return staff
		}
	})

	res.send(filteredStuffData);
});

const port = process.argv[2]
app.listen(port, () => console.log(`Server running on port: ${port}`));

/* 
Abrir el server así: node index.js 4567
Hacer una petición por get así: localhost:7898/api/staff?q=Dídac

Te retornará este JSON:

[
    {
        "name": "Dídac",
        "surname": "García",
        "email": "didaquis@gmail.com"
    }
]

*/