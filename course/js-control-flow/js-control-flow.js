// # Practice Control-flow
// Goals => Control flows


// ### larger_integer

function largeNumber(num1, num2){
	return (num1 >= num2) ? num1 : num2;
}

console.log(largeNumber(3,6));


// ### sign_product

function signOfNumber(num1, num2, num3){
	switch(true){
		case ((num1 * num2 * num3) == 0):
			alert("No sign, result = 0");
			break;

		case ((num1 * num2 * num3) > 0):
			alert("Positive sign");
			break;

		case ((num1 * num2 * num3) < 0):
			alert("Negative sign");
			break;
	}
}

signOfNumber(3, -7, 2);


// ### sort_numbers
/*
	Posibles casos:

		a, b, c
		a, c, b
		b, a, c
		b, c, a
		c, a, b
		c, b, a

		un número es igual a alguno de los demás.
*/
function sortNumbers(a, b, c){
	switch (true){
		case (a > b && b > c && a > c):
			alert(a + "," + b + "," + c);
			break;
		
		case (a > c && c > b && a > b):
			alert(a + "," + c + "," + b);
			break;
		
		case (b > a && a > c && b > c):
			alert(b + "," + a + "," + c);
			break;
		
		case (b > c && c > a && b > a):
			alert(b + "," + c + "," + a);
			break;
		
		case (c > a && a > b && c > b):
			alert(c + "," + a + "," + b);
			break;

		case (c > b && b > a && c > a):
			alert(c + "," + b + "," + a);
			break;

		default:
			alert("los números no son distintos");
	}

}

sortNumbers(0, -1, 4);



// ###  largest_number

function largestNumbers(a,b,c,d,e){
	var largestNumber = arguments[0];
	for (var i = 0; i < arguments.length; i++) {
		if(arguments[i] > largestNumber){
			largestNumber = arguments[i];
		}
	}
	return largestNumber;
}

console.log(largestNumbers(-5, -2, -6, 0, -1)); // Output : 0



// ### odd_or_even

function oddOrEven(){
	var count = 0;
	while(count <= 15){
		if(count % 2 == 0){
			console.log(count + " is even");
		}else{
			console.log(count + " is odd");
		}
		count++;
	}
}

oddOrEven();



// ### FizzBuzz

function fizz_buzz(){
	for (var i = 1; i <= 100; i++) {
		if ( (i % 3 == 0) && (i % 5 == 0) ){
			// divisible entre 3 y 5
			console.log("FizzBuzz");
			continue;
		}else if (i % 3 == 0){
			// divisible entre 3
			console.log("Fizz");
			continue;
		}else if (i % 5 == 0){
			// divisible entre 5
			console.log("Buzz");
			continue;
		}else{
			console.log(i);
		}
	}
}

fizz_buzz();



// ### contruct_pattern

//Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor
function asterisct(){
	var asterisc = result = "*";
	for (var i = 0; i < 7; i++) {
		console.log(result);
		result += asterisc;
	}
}

asterisct();











