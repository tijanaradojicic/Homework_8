// Type JavaScript here and click "Run Code" or press Ctrl + s


/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
	let newPerson = {};
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
}

var vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
  greet: function(){
    console.log("hello");
  }

};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
	// add code here
	let newPerson = Object.create(personStore);
	newPerson.name = name;
	newPerson.age = age;
	return newPerson;

}

var sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/

// add code here

personStore.introduce = function(){
  console.log("Hi, my name is " + this.name);
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
	// add code here
	this.greet = function(){
    console.log("hello");
  }

}


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
	// add code here
	this.name = name;
  this.age = age;
  return this;
}



// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here

personFromConstructor.prototype = {
  introduce: function(){
    console.log("hi my name is "+this.name);
  }
}
//var mike = new personFromConstructor('Mike', 30);

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
    // add code here
		this.name = name;
	}

	// add code here
  greet(){
  console.log("hello");
}

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here

class DeveloperClass extends PersonClass{
  introduce(){
    console.log("hi my name is "+this.name);
  }
}


// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore); /* Put code here */ ;

function adminFactory(name, score) {
  // Put code here
  let admin = userFactory(name,score);
  admin.type = "Admin";
  return admin;
}

/* Put code here for a method called sharePublicMessage*/
adminFactory.prototype.sharePublicMessage = function(){
console.log("welcome users");
}

var adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
