// # Challenge prototype & Inheritance

//### Person
// a)
function Person(firstName, lastName, age, gender, interests){
	this.first_name = firstName;
	this.last_name = lastName;
	this.age = age;
	this.gender = gender;
	this.interests = interests;
}

// b)
Person.prototype.greeting = function(){
	return "Hi! I'm " + this.first_name + ".";
};

Person.prototype.farewell = function(){
	return this.first_name + " has left the building. Bye for now!";
};

Person.prototype.bio = function(){
	var result = this.first_name + " is " + this.age + " years old. ";
	result += (this.gender === "male")? "He" : "She";
	result += " likes ";
	result += this.interests.join(", ");
	result += ".";
	return result;
};

var javi = new Person('Javier','García','23','male',['videogames', 'play guitar']);

console.log( javi.greeting() );
console.log( javi.farewell() );
console.log( javi.bio() );



// ### Student
// a)
function Student(firstName, lastName, age, gender, interests){
	// esta clase hereda de la clase Person
	Person.call(this,firstName, lastName, age, gender, interests);
}

Student.prototype = new Person();

var lorena = new Student('Lorena','Ruiz','26','female',['footing', 'play drums']);

console.log( lorena.farewell() );

// b)
Student.prototype.greeting = function(){
	return "Yo! I'm " + this.first_name + ".";
};

console.log( lorena.greeting() );



// ### Teacher
// a)
function Teacher(firstName, lastName, age, gender, interests, subject){
	Person.call(this,firstName, lastName, age, gender, interests);
	this.subject = subject;
}

Teacher.prototype = new Person();

var paula = new Teacher('Paula','Martínez','34','female',['watch TV', 'read books'],'Technology');

console.log(paula);

// b)
//greeting() //returns: Hello. My name is <Mr./Mrs> <last-name> and I teach <subject>.

Teacher.prototype.greeting = function() {
	var result = "Hello. My name is ";
	result += (this.gender === "male")? "Mr. " : "Mrs. ";
	result += this.last_name + " and I teach " + this.subject + ".";
	return result;
};
// observa que estoy redefiniendo el método "greeting" de Teacher, pero el de "Person" y "Student" se mantiene.

console.log( paula.greeting() );


