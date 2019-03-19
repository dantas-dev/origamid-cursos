// function teste() {
//   return 1 + 1;
// }

// // console.log(teste.prototype);
// // console.log(typeof teste.prototype);

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     return this.nome + ' abraçou'
//   }
//   this.andar = function () {
//     return 'andou pelo objeto';
//   }
// }

// Pessoa.prototype.andar = function() {
//   return this.nome + ' andou';
// }

// Pessoa.prototype.nadar = function() {
//   return this.nome + ' nadou';
// }

// const eduardo = new Pessoa('Eduardo', 25);

// // prototype só está ligado a FUNÇÃO
// // console.log(Pessoa.prototype);
// // console.log(eduardo.prototype);

// // CONSTRUTORES NATIVOS
// const pais = 'Brasil';
// const cidade = new String('Rio');

// const listaAnimais = ['cachorro', 'gato', 'cavalo'];

// const lista = document.querySelectorAll('li');

// // Transforma em uma array
// const listaArray = Array.prototype.slice.call(lista);
// const listaArray1 = Array.from(lista);

// // MÉTODO DO OBJETO VS PROTÓTIPO
// // console.log(Object.getOwnPropertyNames(Array));
// // console.log(Object.getOwnPropertyNames(Array.prototype));
// // console.log(Object.getOwnPropertyNames(eduardo));
// // console.log(Object.getOwnPropertyNames(eduardo.__proto__));


// // ENTENDA O QUE ESTÁ SENDO RETORNADO
// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }

// console.log(typeof Carro.marca); //string
// console.log(typeof Carro.preco); //number
// console.log(typeof Carro.andar); //function
// console.log(typeof Carro.andar()); //boolean

// console.log(Carro.marca.constructor.name);
// console.log(Carro.preco.constructor.name);
// console.log(Carro.andar.constructor.name);
// console.log(Carro.andar().constructor.name);

//QUESTIONS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.fullName = function(){
  return `Olá ${this.nome} ${this.sobrenome}.`
}

const edu = new Pessoas('Eduardo', 'Dantas', 25);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(Document.prototype)
NodeList.prototype;
HTMLCollection.prototype;
Document.prototype;


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //erro

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string
