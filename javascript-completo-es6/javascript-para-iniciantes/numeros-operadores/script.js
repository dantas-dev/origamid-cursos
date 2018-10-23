var total = 10 + 5 + 10;
var div = 200 / 5;
var mod = 387 / 2;

console.log(mod);

/* NaN = Not a Number */
var tNaN = 'This is 100' / 2;
console.log(isNaN(tNaN));

var num = 89;
var uni = 'kg';
var weight = num + uni;
console.log(weight, isNaN(weight));

/* The orde is important */
var t1 = 20 + 5 * 2; // 30
var t2 = (20 + 5) * 2; // 50
console.log(t1,t2);

/* increment */
var x = 1;
console.log(x, ++x, x++, x);
/* decrement */
var y = 4;
console.log(y, --y, y--, y);
// NaN
var text = `I'm not a number.`;
console.log(++text);
console.log(text--);

//Change the value in number
console.log(+text); //NaN
console.log(-t1, +t2, isNaN(t1), isNaN(t2)); // -30 

// js can ignore space
var year = '2018';
console.log(year - 5); // 2013

//but can't ignore letters
year = '2018s'
console.log(year - 5); //NaN

/* Questions */

//1 result is 35.

//2
console.log(-`i'm not number` + 10, year * 10);

//3 
var num1 = '200';
var result = +num1 + 50;
console.log(result,isNaN(result));

//4 
var five = 5;
console.log(++five);

//5
var n1 = '80';
var un = 'kg';
var divTwo = (+n1 / 2) + un;

console.log(divTwo);