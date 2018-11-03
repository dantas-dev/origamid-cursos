// // const car = {
// //   brand: 'brand',
// //   price: 0
// // };

// // const honda = car;
// // honda.brand = 'honda';
// // honda.price = '29000';

// // const fiat = car;
// // fiat.brand = 'fiat';
// // fiat.price = '19000';

// function Car(brand, price) {
//   this.brand = brand;
//   this.price = price;
// }

// const honda = new Car();
// const fiat = new Car();
// fiat.brand = 'fiat';

// const ferrari = new Car('ferrari',100);

// function Carro(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;

//   this.marca = marca;
//   this.preco = precoFinal;

//   // console.log(this);
// }

// const mazda = new Carro('Mazda', 5000);

// Real example
// const Dom = {
//   seletor: 'li',
//   element() {
//   return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativar');
//   }
// }
// // Dom.seletor = 'ul';

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add('ativar');
//   };
// }

// const li = new Dom('li');
// const ul = new Dom('ul');

// console.log(
// li.element(),'\n',
// ul.element()
// );

// li.ativar();
// ul.ativar();

// const lastLI = new Dom('li:last-child');
// console.log(lastLI.element());
// lastLI.ativar();

// Questions

// 1
function Pessoa(nome, idade) {
  this.nome  = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

// 2
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);
joao.andar();
maria.andar();
bruno.andar();


// 3
function Dom(selector) {

  this.elements = document.querySelectorAll(selector);

  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

