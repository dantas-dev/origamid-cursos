var pessoa = {
  nome: 'André',
  idade: 28,
}

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

// var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000';

menu.esconder = function() {
  console.log('Escondi')
}
var bg = menu.backgroundColor;

/* Questions */
// 1
var info = {
  name: 'Daredevil',
  lastName: 'Murdock',
  occupation: 'vigilant',
  height: 1.82,
  vision() {
    console.log('I can see in the dark.')
  }
}

//2
info.fullName = function () {
  return `${this.name} ${this.lastName}.`
}

//3
var car = {
  price: 1000,
  doors: 4,
  brand: 'Audi'
}

car.price = 3000;

//4 
var dog = {
  breed: 'labrador',
  color: 'black',
  age: 10,
  bark(p) {
    if(p === 'man') {
      console.log('the dog barks when see a man.');
    } else {
      console.log('the dog do not barks.');
    }
  }
}

//tudo e objeto
var nome = 'André';

var nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
  console.log('click')
  btn.classList.add('isActive');
});

var num = 11.8;

console.log(num = num.toFixed());

// question
// 1
var myName = 'Batman';
console.log(
  myName.charAt(2),
  myName.length,
  myName.concat(' e Robin')
);

// 2
console.log(
  btn.className,
  btn.textContent,
  btn.scrollTop,
  btn.classList.add('js'),
  btn.className,
  btn.classList.remove('js'),
  btn.className
);

// 3: clipboard.js
