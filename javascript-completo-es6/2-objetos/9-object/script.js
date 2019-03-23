// // // const pessoa = new Object({
// // //   nome: 'Eduardo'
// // // });

// // // const carro = {
// // //   init(valor) {
// // //     this.marca = valor;
// // //     return this;
// // //   },
// // //   rodas: 4,
// // //   acelerar() {
// // //     return this.marca + ' acelerou';
// // //   },
// // //   buzinar() {
// // //     return this.marca + ' buzinou';
// // //   }
// // // }

// // // const honda = Object.create(carro);
// // // honda.init('honda');

// // // const ferrari = Object.create(carro).init('ferrari');

// // const funcaoAutomovel = {
// //   acelerar() {
// //     return 'acelerou';
// //   },
// //   buzinar() {
// //     return 'buzinou';
// //   },
// // }

// // const moto = {
// //   rodas: 2,
// //   capacete: true,
// // }

// // const carro = {
// //   rodas: 4,
// //   mala: true,
// // }

// // Object.assign(moto, funcaoAutomovel);
// // Object.assign(carro, funcaoAutomovel);

// // const bike = {};

// // Object.defineProperties(bike, {
// //   rodas: {
// //     value: 2,
// //     configurable: false, // impede deletar e mudança de valor
// //     enumarable: true, // torna enumerável
// //   },
// //   capacete: {
// //     value: true,
// //     configurable: true,
// //     writable: false, // impede mudança de valor
// //   },
// // })

// // bike.rodas = 4;
// // delete bike.rodas;

// // const moto = {
// //   capacete: true
// // }
// // Object.defineProperties(moto, {
// //   rodas: {
// //     get() {
// //       return this._rodas;
// //     },
// //     set(valor) {
// //       this._rodas = valor * 2 + ' rodas.';
// //     }
// //   }
// // });

// // console.log(Object.getOwnPropertyDescriptors(Array));
// // console.log(Object.getOwnPropertyDescriptors(Array.prototype));
// // console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight'));

// // Object.keys(Array);
// // // [] vazia, pois não possui propriedades enumeráveis

// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018,
// // }
// // Object.keys(carro);
// // // ['marca', 'ano']
// // Object.values(carro);
// // // ['Ford', 2018]
// // Object.entries(carro);
// // // [['marca', 'Ford'], ['ano', 2018]]

// // console.log(Object.getOwnPropertyNames(Function.prototype));

// // const frutas = ['Banana', 'Pêra']
// // Object.getPrototypeOf(frutas);
// // Object.getPrototypeOf(''); // String

// // const frutas1 = ['Banana', 'Pêra'];
// // const frutas2 = ['Banana', 'Pêra'];
// // const frutas3 = frutas1;

// // Object.is(frutas1, frutas2); // false
// // Object.is(frutas1, frutas3); // true

// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018,
// // }
// // Object.freeze(carro);
// // carro.marca = 'honda';
// // console.log(carro.marca);
// // Object.seal(carro);
// // carro.portas = 4;
// // delete carro.marca;
// // console.log(carro)
// // Object.preventExtensions(carro);
// // carro.portas = 4;
// // delete carro.marca;
// // console.log(carro)

// // Object.isFrozen(carro); // true
// // Object.isSealed(carro); // true
// // Object.isExtensible(carro); // false

// // const frutas = ['Banana', 'Uva'];
// // frutas.constructor; // Array

// // const frase = 'Isso é uma String';
// // frase.constructor; // String

// // const frutas = ['Banana', 'Uva'];

// // frutas.hasOwnProperty('map'); // false
// // Array.hasOwnProperty('map'); // false
// // Array.prototype.hasOwnProperty('map'); // true

// // Array.prototype.propertyIsEnumerable('map'); // false
// // window.propertyIsEnumerable('innerHeight'); // true

// // const hey = 'Hello World!';

// // Array.prototype.isPrototypeOf(frutas);//true
// // Array.prototype.isPrototypeOf(hey); //false

// const frutas = ['Banana', 'Uva'];
// const frase = 'Hello World.';
// const func = (a, b) => {
//   return a + b;
// }
// const carro = {
//   marca: 'Fusca',
//   ano: '1960'
// }

// console.log(frutas.toString());
// console.log(frase.toString());
// console.log(func.toString());
// console.log(carro.toString());

// console.log(Object.prototype.toString.call(frutas));
// console.log(Object.prototype.toString.call(frase));
// console.log(Object.prototype.toString.call(func));
// console.log(Object.prototype.toString.call(carro));

// const frutas = ['Banana', 'Uva'];
// frutas.toString(); // 'Banana,Uva'
// typeof frutas; // object
// Object.prototype.toString.call(frutas); // [object Array]

// const frase = 'Uma String';
// frase.toString(); // 'Uma String'
// typeof frase; // string
// Object.prototype.toString.call(frase); // [object String]

// const carro = {marca: 'Ford'};
// carro.toString(); // [object Object]
// typeof carro; // object
// Object.prototype.toString.call(carro); // [object Object]

// const li = document.querySelectorAll('li');
// typeof li; // object
// Object.prototype.toString.call(li); // [object NodeList]

// QUESTIONS

// Crie uma função que verifique
// corretamente o tipo de dado
const type = (_this) => {
  return Object.prototype.toString.call(_this);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true
  }
})


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
const AllPropString = Object.getOwnPropertyNames(String.prototype)
const AllPropArray = Object.getOwnPropertyNames(Array.prototype)