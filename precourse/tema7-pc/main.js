var snd = new Audio("data:audio/ogg;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");


/* Declaramos una función que nos ayudará a optimizar la escritura del código */
function $(idOfElement){
	return document.getElementById(idOfElement);
};

/* Creamos un array que almacenará el cálculo que el usuario quiere hacer */
var nextCalculation = ["="];


/* Detectamos click en cualquier elemento de la web */
document.addEventListener('click', function detectingClick(e) {
	e = e || window.event;
	var target = e.target || e.srcElement,
		text = target.textContent || text.innerText;
		

		// si lo que me pasan es el valor de alguno de los botones, lo envío a otra función
		var acceptedValues = ["0","1","2","3","4","5","6","7","8","9",".","AC","+","-","/","*","="];
		if(acceptedValues.indexOf(text) != -1){
			// El valor de "text" se encuentra entre alguno de los valores del array "acceptedValues".
			if(target.id != "result"){
				// Me aseguro que no han clicado en el elemento donde se muestran los resultados (cuyo id es "result")

				switch (text){
					case "AC":
						showResult(0);
						nextCalculation = ["="];
						acceptedValues = ["0","1","2","3","4","5","6","7","8","9",".","AC","+","-","/","*","="];
						var disabledElements = document.getElementsByClassName("disabled");
						while (disabledElements[0]){
							disabledElements[0].classList.remove("disabled");
						}
						snd.play();
						var allBoxNumbers = document.getElementsByClassName("box-number");
						for(var i = 0; i < allBoxNumbers.length; i++){
							allBoxNumbers[i].style.display = '';
						}

						var allBoxOperation = document.getElementsByClassName("box-operation");
						for(var i = 0; i < allBoxOperation.length; i++){
							allBoxOperation[i].style.display = '';
						}
						break;

					case ".":
						// creo una regular expression para detectar el punto decimal
						var pointRegex = new RegExp("\\.", "ig");
						// Obtengo la cantidad de puntos que hay en el número que ve el usuario
						var totalOfPoints = $("result").innerText.match(pointRegex); // Si no hay ningún punto, devolverá "null"
						if(totalOfPoints === null){
							// si la cifra aún no tiene símbolo de decimal, le permito añadirlo

							if( ($("result").innerText == "/") || ($("result").innerText == "*") || ($("result").innerText == "-") || ($("result").innerText == "+") ){
								// si en pantalla se muestra un símbolo, le concateno delante un zero
								$("result").innerText = "0.";
								nextCalculation.push("0");
							}else{
								$("result").innerText += text;
							}

							nextCalculation.push(text);
							snd.play();

							// Después de pulsar este botón, no permito pulsar ciertos botones
							$("point").classList.add("disabled");
							$("operation_division").classList.add("disabled");
							$("operation_multiplication").classList.add("disabled");
							$("operation_substraction").classList.add("disabled");
							$("operation_addition").classList.add("disabled");
							$("operation_equal").classList.add("disabled");
							var point = acceptedValues.indexOf(".");
							acceptedValues.splice(point,1);
							var dividerSymbol = acceptedValues.indexOf("/");
							acceptedValues.splice(dividerSymbol,1);
							var multiplierSymbol = acceptedValues.indexOf("*");
							acceptedValues.splice(multiplierSymbol,1);
							var subSymbol = acceptedValues.indexOf("-");
							acceptedValues.splice(subSymbol,1);
							var addSymbol = acceptedValues.indexOf("+");
							acceptedValues.splice(addSymbol,1);
							var equalSymbol = acceptedValues.indexOf("=");
							acceptedValues.splice(equalSymbol,1);
						}
						break;

					case "+":
						if( (nextCalculation.indexOf("/") != -1) || (nextCalculation.indexOf("*") != -1) || (nextCalculation.indexOf("+") != -1) || (nextCalculation.indexOf("-") != -1) ) {
							// si en NextCalculation ya hay un símbolo operador
						}else{
							if($("result").innerText == "0"){
								nextCalculation.push("0");
							}
							nextCalculation.push(text);
							showResult(text);
							snd.play();
						}
						// Después de pulsar este botón, no permito pulsar ciertos botones
						$("operation_division").classList.add("disabled");
						$("operation_multiplication").classList.add("disabled");
						$("operation_substraction").classList.add("disabled");
						$("operation_addition").classList.add("disabled");
						$("operation_equal").classList.add("disabled");
						var dividerSymbol = acceptedValues.indexOf("/");
						acceptedValues.splice(dividerSymbol,1);
						var multiplierSymbol = acceptedValues.indexOf("*");
						acceptedValues.splice(multiplierSymbol,1);
						var subSymbol = acceptedValues.indexOf("-");
						acceptedValues.splice(subSymbol,1);
						var addSymbol = acceptedValues.indexOf("+");
						acceptedValues.splice(addSymbol,1);
						var equalSymbol = acceptedValues.indexOf("=");
						acceptedValues.splice(equalSymbol,1);
						break;

					case "-":
						if( (nextCalculation.indexOf("/") != -1) || (nextCalculation.indexOf("*") != -1) || (nextCalculation.indexOf("+") != -1) || (nextCalculation.indexOf("-") != -1) ) {
							// si en NextCalculation ya hay un símbolo operador
						}else{
							if($("result").innerText == "0"){
								nextCalculation.push("0");
							}
							nextCalculation.push(text);
							showResult(text);
							snd.play();
						}
						// Después de pulsar este botón, no permito pulsar ciertos botones
						$("operation_division").classList.add("disabled");
						$("operation_multiplication").classList.add("disabled");
						$("operation_substraction").classList.add("disabled");
						$("operation_addition").classList.add("disabled");
						$("operation_equal").classList.add("disabled");
						var dividerSymbol = acceptedValues.indexOf("/");
						acceptedValues.splice(dividerSymbol,1);
						var multiplierSymbol = acceptedValues.indexOf("*");
						acceptedValues.splice(multiplierSymbol,1);
						var subSymbol = acceptedValues.indexOf("-");
						acceptedValues.splice(subSymbol,1);
						var addSymbol = acceptedValues.indexOf("+");
						acceptedValues.splice(addSymbol,1);
						var equalSymbol = acceptedValues.indexOf("=");
						acceptedValues.splice(equalSymbol,1);
						break;

					case "*":
						if( (nextCalculation.indexOf("/") != -1) || (nextCalculation.indexOf("*") != -1) || (nextCalculation.indexOf("+") != -1) || (nextCalculation.indexOf("-") != -1) ) {
							// si en NextCalculation ya hay un símbolo operador
						}else{
							if($("result").innerText == "0"){
								nextCalculation.push("0");
							}
							nextCalculation.push(text);
							showResult(text);
							snd.play();
						}
						// Después de pulsar este botón, no permito pulsar ciertos botones
						$("operation_division").classList.add("disabled");
						$("operation_multiplication").classList.add("disabled");
						$("operation_substraction").classList.add("disabled");
						$("operation_addition").classList.add("disabled");
						$("operation_equal").classList.add("disabled");
						var dividerSymbol = acceptedValues.indexOf("/");
						acceptedValues.splice(dividerSymbol,1);
						var multiplierSymbol = acceptedValues.indexOf("*");
						acceptedValues.splice(multiplierSymbol,1);
						var subSymbol = acceptedValues.indexOf("-");
						acceptedValues.splice(subSymbol,1);
						var addSymbol = acceptedValues.indexOf("+");
						acceptedValues.splice(addSymbol,1);
						var equalSymbol = acceptedValues.indexOf("=");
						acceptedValues.splice(equalSymbol,1);
						break;

					case "/":
						if( (nextCalculation.indexOf("/") != -1) || (nextCalculation.indexOf("*") != -1) || (nextCalculation.indexOf("+") != -1) || (nextCalculation.indexOf("-") != -1) ) {
								// si en NextCalculation ya hay un símbolo operador
						}else{
							if($("result").innerText == "0"){
								nextCalculation.push("0");
							}
							nextCalculation.push(text);
							showResult(text);
							snd.play();
						}
						// Después de pulsar este botón, no permito pulsar ciertos botones
						$("operation_division").classList.add("disabled");
						$("operation_multiplication").classList.add("disabled");
						$("operation_substraction").classList.add("disabled");
						$("operation_addition").classList.add("disabled");
						$("operation_equal").classList.add("disabled");
						var dividerSymbol = acceptedValues.indexOf("/");
						acceptedValues.splice(dividerSymbol,1);
						var multiplierSymbol = acceptedValues.indexOf("*");
						acceptedValues.splice(multiplierSymbol,1);
						var subSymbol = acceptedValues.indexOf("-");
						acceptedValues.splice(subSymbol,1);
						var addSymbol = acceptedValues.indexOf("+");
						acceptedValues.splice(addSymbol,1);
						var equalSymbol = acceptedValues.indexOf("=");
						acceptedValues.splice(equalSymbol,1);
						break;

					case "=":
						if( (nextCalculation[nextCalculation.length-1] != "/") && (nextCalculation[nextCalculation.length-1] != "*") && (nextCalculation[nextCalculation.length-1] != "+") && (nextCalculation[nextCalculation.length-1] != "-") ){
							nextCalculation.push(text);
							prepareForCalculate(nextCalculation);
							var disabledElements = document.getElementsByClassName("disabled");
							while (disabledElements[0]){
								disabledElements[0].classList.remove("disabled");
							}
							snd.play();
							nextCalculation = ["="];

							var disabledElements = document.getElementsByClassName("box-number");
							for(var i = 0; i <= disabledElements.length-1; i++){
								disabledElements[i].style.display = 'none';
							}
							$("operation_division").style.display = 'none';
							$("operation_multiplication").style.display = 'none';
							$("operation_substraction").style.display = 'none';
							$("operation_addition").style.display = 'none';
							$("operation_equal").style.display = 'none';
						}
						break;

					default:
						switch ($("result").innerText){
							// compruebo si el caracter que ve el usuario es símbolo, si es así, reseteo la pantalla
							case "/":
							case "*":
							case "+":
							case "-":
								// si lo que aparece en pantalla es un símbolo, reseteamos la pantalla antes de seguir.
								showResult("");
								break;
						}

						if(text == "0"){
							// si han pulsado un "0"
							if($("result").innerText != "0"){
								// si el número que hay en resultado es distinto de cero...
								showResult($("result").innerText += text);
								nextCalculation.push(text);
							}
						}else{
							// Si han pulsado un número distinto de 0
							if($("result").innerText != "0"){
								// si el número que hay en resultado es distinto de cero...
								showResult($("result").innerText += text);
								nextCalculation.push(text);
							}else{
								showResult(text);
								nextCalculation.push(text);
							}
						}

						if( (nextCalculation.indexOf("/") != -1) || (nextCalculation.indexOf("*") != -1) || (nextCalculation.indexOf("+") != -1) || (nextCalculation.indexOf("-") != -1) ) {
							// si en "nextCalculation" ya hay un simbolo operador
							$("operation_equal").classList.remove("disabled");
						}else{
							var disabledElements = document.getElementsByClassName("disabled");
							while (disabledElements[0]){
								disabledElements[0].classList.remove("disabled");
							}
						}
						snd.play();
				}
			}
		}

}, false);


/* Función que sanitizará los valores introducidos por el usuario */
function prepareForCalculate(data){
	if(data[0] == "="){
		// si al inicio del array hay un símbolo "=", lo sustituyo por "0"
		data[0] = "0";
	}

	while ( (data[0] == "0") && (data[1] == "0") ){
		// Quito exceso de zeros a la izquierda
		data=data.slice(1);
	}

	if(data[0] == "0"){
		// si comienza por zero
		if( (data[1] != ".") && (data[1] != "/") && (data[1] != "*") && (data[1] != "-") && (data[1] != "+") ){
			// Y la segunda cifra no es un número
			data=data.slice(1); // quito el zero de la izquierda
		}
	}

	for(var i = 0; i <= data.length -1; i++){
		// Recorro los elementos tratando eliminar errores cercanos a los puntos decimales
		if(!data[i +1]){ // si es "undefined", me salto la vuelta del bucle
			continue;
		}
		if( (data[i] == ".") && (data[i+1] == "+")){
			data.splice( i+1 , 0 , "0");
		}

		if( (data[i] == ".") && (data[i+1] == "-")){
			data.splice( i+1 , 0 , "0");
		}

		if( (data[i] == ".") && (data[i+1] == "*")){
			data.splice( i+1 , 0 , "0");
		}

		if( (data[i] == ".") && (data[i+1] == "/")){
			data.splice( i+1 , 0 , "0");
		}

		if( (data[i] == ".") && (data[i+1] == "=")){
			data.splice( i+1 , 0 , "0"); // inserto un elemento en una determinada posición del array
		}
	}

	data = fixDoubleOperation(data);

	// Unificando cifras.
	// Voy a insertar elementos dummy para luego generar un array mejor formado
	for(var i = 0; i <= data.length -1; i++){
		if(data[i] == "="){
			data.splice( i, 1 , "#=");
		}
		if(data[i] == "/"){
			data.splice( i, 1 , "#/#");
		}
		if(data[i] == "*"){
			data.splice( i, 1 , "#*#");
		}
		if(data[i] == "+"){
			data.splice( i, 1 , "#+#");
		}
		if(data[i] == "-"){
			data.splice( i, 1 , "#-#");
		}
	}

	var StringOfData = data.join(""); // lo convierto todo a un string
	data = StringOfData.split(/#/); // genero un array con las cifras unificadas
	
	// Puede pasar que el usuario fuerze esta situación: ["3", "/", "", "="]
	for(var i = 0; i <= data.length -1; i++){
		if(data[i] == ""){
			data.splice(i,1);
		}
	}

	/* Debería aplicar recursividad! */
	data = fixDoubleOperation(data);
	data = fixDoubleOperation(data);

	calculate(data);
}

/* Pequeña función que nos corrije múltiples pulsaciones seguidos en los botones de operación */
function fixDoubleOperation(data){
	for(var i = 0; i <= data.length -1; i++){
		// Recorro los elementos tratando eliminar los doble símbolos
		if(!data[i +1]){ // si es "undefined", me salto la vuelta del bucle
			continue;
		}
		if( (data[i] == "/") || (data[i] == "*") || (data[i] == "+") || (data[i] == "-") || (data[i] == "=")){
			if( (data[i+1] == "/") || (data[i+1] == "*") || (data[i+1] == "+") || (data[i+1] == "-") || (data[i+1] == "=")){
				data.splice(i,1); // elimino un determinado elemento del array
			}
		}
	}
	return data;
}

function calculate(data){
	if(data[0] == "="){
		// estructura de lo que me llega en "data" =>  [=]
		showResult("0");
	}else if(data[1] == "="){
		// estructura de lo que me llega en "data" =>  [num] [=]
		showResult(data[0]);
	}else{
		// estructura de lo que me llega en "data" =>  [num] [operador] [num] [=]
		var result;
		switch (data[1]){
			case "/":
				result = parseFloat(data[0]) / parseFloat(data[2]);
				showResult(result);
				break;
			case "*":
				result = parseFloat(data[0]) * parseFloat(data[2]);
				showResult(result);
				break;
			case "+":
				result = parseFloat(data[0]) + parseFloat(data[2]);
				showResult(result);
				break;
			case "-":
				result = parseFloat(data[0]) - parseFloat(data[2]);
				showResult(result);
				break;
		}
	}
}


/* Mostramos el resultado al usuario */
function showResult(result){
	$("result").innerText = result;
}
