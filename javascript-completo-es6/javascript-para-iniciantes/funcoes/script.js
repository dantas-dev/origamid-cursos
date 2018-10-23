function myfun() {
  console.log('function');
}

myfun();

function pi() {
  return 3.14;
}
console.log(5 * pi());

function imc (w,h) {
  var imc = w / (h * h);
  return imc;
}

console.log(imc(100,1.7));

function loveColor(color) {
  switch(color){
    case 'blue':
    console.log('You love blue.');
    break;
    case 'red':
    console.log('You love red.');
    break;
    default:
    console.log('You do not love anything.');
  }
}

loveColor('blue');
loveColor('red');
loveColor();


addEventListener('click', function () {
  console.log('hi');
});

function age(a) {
  console.log(typeof a);
  if(a >= 50) {
    return true;
  } else {
    return false;
  }
}

console.log(age(10));
console.log(age(';)'));

// hoisting
hi();

function hi() {
  console.log('hi');
}

/* Questions */
// 1
function isTruthy(value) {
  if(value) {
    return `${value} is truthy.`
  } else {
    return `${value} is not truthy.`
  }
}

// 2
function perimeter(side) {
  return side * 4;
}

// 3
function fullName(name,lastname) {
  return `Welcome Mr.${name} ${lastname}.`
}

// 4
function isEven(num) {
  if(num % 2) {
    console.log(`${num} Is even.`);
  } else {
    console.log(`${num} Is odd.`);
  }
}

// 5
function funTypeof(value) {
  return typeof value;
}

// 6
addEventListener('scroll', function () {
  console.log(fullName('Eduardo', 'Dantas'));
});

// 7
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}.`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));