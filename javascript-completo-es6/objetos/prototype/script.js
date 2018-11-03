function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    console.log(`${this.nome} esta abraçando.`);
  }
  this.andar = function () {
    console.log(`${this.nome} andou pelo objeto.`);
  }
}

Pessoa.prototype.andar = function () {
  console.log(`${this.nome} esta andando.`);
}

const eduardo = new Pessoa('Eduardo', 25);

// console.log(Pessoa.prototype);
// console.log(eduardo.prototype);

const pais = 'Brasil';
const cidade = new String('Rio');

// console.log(
// pais.charAt(0),
// cidade.charAt(0)
// );

const listaAnimais = ['dog', 'cat', 'horse'];

const lista = document.querySelectorAll('li');

//transformar em array
const listaArray = Array.prototype.slice.call(lista);

const outraListaArray = Array.from(lista);

// console.log('Array',Object.getOwnPropertyNames(Array));
// console.log('Array.prototype',Object.getOwnPropertyNames(Array.prototype));
// console.log('eduardo',Object.getOwnPropertyNames(eduardo));
// console.log('eduardo',Object.getOwnPropertyNames(eduardo.__proto__));

// console.log('Construtor de eduardo:',eduardo.constructor.name);
// console.log('Construtor de listaArray:',listaArray.constructor.name);
// console.log('Construtor de listaAnimais:',listaAnimais.constructor.name);
// console.log('Construtor de lista:',lista.constructor.name);

// const carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

// console.log('carro:',typeof carro);
// console.log('carro.marca:',typeof carro.marca);
// console.log('carro.preco:',typeof carro.preco);
// console.log('carro.andar:',typeof carro.andar);
// console.log('carro.andar():',typeof carro.andar());

// console.log(
//   'constructor.name:',
//   carro.constructor.name,
//   carro.marca.constructor.name,
//   carro.preco.constructor.name,
//   carro.andar.constructor.name,
//   carro.andar().constructor.name
// )

/* Questions  */

// 1
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `Nome completo: ${this.nome} ${this.sobrenome}.`
};


//2
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));


//3
const li = document.querySelector('li');

console.log(
  li.constructor.name,
  li.click.constructor.name,
  li.innerText.constructor.name,
  li.value.constructor.name,
  li.hidden.constructor.name,
  li.offsetLeft.constructor.name
);


//4
li.hidden.constructor.name; // String