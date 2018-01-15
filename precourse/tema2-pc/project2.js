// https://github.com/agandia9/Subjects-PreCourse/blob/master/mini-proj.md


// # Skylab Airlines!

//(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

//Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

//Se preguntará por el nombre de usuario y dará la bienvenida.

//El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

//A continuación, el usuario verá el coste medio de los vuelos.

//También podrá ver cuantos vuelos efectúan escalas.

//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.


var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 12, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 13, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

function obtainName(){
	var nameOfUser = prompt("Please enter your name");
	if(nameOfUser == "" || nameOfUser == null){
		obtainName();
	}else{
		return nameOfUser;
	}
}

function listFlight(array_flights){
	console.log("\nThis is the list of flights:");
	var _from_, _to_, _cost_, _scale_;
	for(var i = 0; i <= array_flights.length -1; i++){
		_from_ = array_flights[i].from;
		_to_ = array_flights[i].to;
		_cost_ = array_flights[i].cost;
		_scale_ = array_flights[i].scale;
		if(_scale_ == true){
			_scale_ = "With scale.";
		}else{
			_scale_ = "Direct flight.";
		}

		console.log(" * Flight from: " + _from_ + " with destination to " + _to_ + ". Cost of flight: " + _cost_ + ". " + _scale_);
	}
}

function averageCost(array_flights){
	var _cost_ = 0;

	for(var i = 0; i <= array_flights.length -1; i++){
		_cost_ = _cost_ + array_flights[i].cost;
	}

	return (_cost_ / array_flights.length);
}

function flightsWithScale(a_flights){

	// Método A:
	//var sumScales = 0;
	//for(var i = 0; i <= a_flights.length -1; i++){
		//if(a_flights[i].scale){
			//sumScales++;
		//}
	//}
	//return sumScales;

	// Método B:
	var array_filtered = a_flights.filter(
			function(a_flights){
				return a_flights.scale == true;
			}
		);
	return array_filtered.length;
}

function lastFlights(a_flights){
	console.log("\nLast departures to: ");
	var showFly = 5;
	var lastID = 0;
	var destintation = "";
	var flyToDelete;
	var indexToDelete;

	while(showFly > 0){
		// hasta que haya mostrado 5 vuelos...

		for(var i = 0; i <= a_flights.length -1; i++){
			// recorro los vuelos tratando de obtener el value del ID más alto.
			if(lastID <= a_flights[i].id){
				lastID = a_flights[i].id;
				destintation = a_flights[i].to;
				flyToDelete = a_flights[i]; // me guardo una copia del vuelo con el id mayor
			}
		}

		// Saco del array de vuelos el vuelo con el id mayor...
		indexToDelete = a_flights.indexOf(flyToDelete);
		if (indexToDelete > -1) {
			a_flights.splice(indexToDelete, 1);
		}

		// muestro la destinación del vuelo
		console.log(destintation);

		lastID = 0; // reseteo el valor máximo del ID.
		showFly--; // ya he mostrado un resultado, decremento la variabla para quitarle una vuelto al "while"
	}
}

function mainSkylabAirlines(flights){
	// saludar al usuario
	var nameOfUser = obtainName();
	console.log("Welcome: "+ nameOfUser);

	// mostrar todos los vuelos
	listFlight(flights);

	// promedio coste de los vuelos
	console.log("\nThe average of cost is: " + averageCost(flights));

	// total de vuelos con escala
	console.log("\nNumber of flights with scale: " + flightsWithScale(flights));

	// Destino de los últimos 5 vuelos (los que tienen el ID mayor)
	lastFlights(flights);
}

mainSkylabAirlines(flights);


