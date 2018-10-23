var isTrue = true;

if (isTrue) {
  console.log('Is true.');
  var x = 10;
} else {
  console.log('Is not true.');
}

console.log(x);

var name = '';

if(name) {
  console.log(name);
} else {
  console.log('Name do not exist.');
}

//falsy
if(false);
if(0); //or -0
if(NaN);
if(null);
if(undefined);
if(''); //or "" ``

// Thruty : everyone else like:
if(true);
if(1);
if(' ');
if(-5);
if({});

console.log(!isTrue);
console.log(!!isTrue);
console.log(!!false,!!true,!!0,!!1);
console.log(!!(10 > 5), !!(10 > 10), !!(10 >= 10));

var x = '10';

console.log(!!(x !== 10), !!(x === 10));
console.log(!!(x != 10), !!(x !== 10));

//&& (AND)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

var expression = (5-5) && (5+5);

if (expression) {
  console.log('true', expression);
} else {
  console.log('false', expression);
}

expression = (5-10) && (5+5);
if (expression) {
  console.log('true', expression);
} else {
  console.log('false', expression);
}

// || OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

expression = (5 - 5) || ( 5 + 5) || ( 10 - 2);
console.log(!!expression, expression);

//switch
var color = 'blue';

switch (color) {
  case 'red':
    console.log('I love red.');
    break;
  case 'white':
    console.log('I love white.');
    break;
  case 'blue':
    console.log('I love blue.');
    break;
  case 'green':
    console.log('I love green.');
    break;
  default:
    console.log('I hate colors.');
}

/* Questions */
//1
var mAge = 25,
    uAge = 30;
if ( mAge > uAge ) {
  console.log(`It's bigger.`);
} else if(mAge === uAge) {
  console.log(`It's the same.`);
} else {
  console.log(`It's less.`);
}

//2 : is true

//3
/* 
- truthy
- truthy
- falsy
- falsy
- falsy
*/

//3 
var brazil = 207;
var china = 1340;
var more = brazil > china,
    equal = brazil === china,
    less = brazil < china;

if(more) {
  console.log('Brazil has more.');
} else if(equal) {
  console.log('Brasil has the same.');
} else if(less) {
  console.log('Brazil is less.');
}

//4 : 'false';

//5 : 'true';
