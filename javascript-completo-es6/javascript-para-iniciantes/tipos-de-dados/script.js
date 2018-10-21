var name = "Daredevil"; //string
console.log(typeof name);

var age = 30; // num
console.log(typeof age);

var team = null; //bug js (null as a object)
console.log(typeof team);

var symbol = Symbol(); //symbol
console.log(typeof symbol);

// concat strings
var lastname = "Murdock";
var fullName = name + " " + lastname;
console.log(fullName);

var goals = 1000;
var text = "I'm have " + goals + " goals";
console.log(typeof text);

var year = "2018";
var month = 8;
console.log(year + month);

/* Template string */
var text1 = "We are here in " + year + ".";
var text2 = `We are here in ${year}.`;

console.log(text1, text2);

/* Questions */
var myString = "Goals are for loosers";
var anotherString = "I'm born 1993";
var age = "25";
var name = "Eduardo",
    lastName = "Dantas";
console.log(`My name's ${name} ${lastName}.`);
var textMe;
textMe = "It's time.";
console.log(typeof name);