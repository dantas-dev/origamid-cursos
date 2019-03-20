// // // const perimetro = new Function('lado', 'return lado * 4');

// // // function somar(n1, n2) {
// // //   return n1 + n2;
// // // }

// // // somar.length; // 2
// // // somar.name; // 'somar'

// // // function darOi() {
// // //   console.log('Oi');
// // // }

// // // // darOi();
// // // // darOi.call();

// // // window.marca = 'Carro';
// // // window.ano = '2010';

// // // function descricaoCarro(velocidade) {
// // //   console.log(this);
// // //   console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// // // }

// // // descricaoCarro();
// // // descricaoCarro.call({marca: 'Honda', ano: 2015 }, '120km');

// // // const carro = {
// // //   marca: 'Ford',
// // //   ano: 2018
// // // }

// // // const carros = ['Ford', 'Fiat', 'VW'];
// // // const frutas = ['Banana', 'Uva', 'Pêra'];

// // // carros.forEach((item) => {
// // //   console.log(item);
// // // });

// // // carros.forEach.call(frutas, (item) => {
// // //   console.log(item);
// // // });

// // // frutas.forEach.call(carros, (item) => {
// // //   console.log(item);
// // // });const carros = ['Ford', 'Fiat', 'VW'];
// // // const frutas = ['Banana', 'Uva', 'Pêra'];

// // // carros.forEach((item) => {
// // //   console.log(item);
// // // });

// // // carros.forEach.call(frutas, (item) => {
// // //   console.log(item);
// // // });

// // // frutas.forEach.call(carros, (item) => {
// // //   console.log(item);
// // // });

// // function Dom(seletor) {
// //   this.element = document.querySelector(seletor);
// // };

// // Dom.prototype.ativo = function(classe) {
// //   console.log(this);
// //   this.element.classList.add(classe);
// // };

// // const li = {
// //   element: document.querySelector('li')
// // }

// // Dom.prototype.ativo.call(li,'ativo');

// // // const lista = new Dom('ul');
// // // lista.ativo('ativar');
// // // lista.ativo.call(li, 'li-ativo');

// // const frutas = ['Uva', 'Maçã', 'Banana'];
// // console.log(frutas);

// // // Array.prototype.mostrarThis = function () {
// // //   console.log(this);
// // // }

// // Array.prototype.pop.call(frutas); //frutas.pop();
// // console.log(frutas);

// // const li = document.querySelectorAll('li');

// // const filtro = Array.prototype.filter.call(li, function(item) {
// //   return item.classList.contains('ativo');
// // });

// // const numeros = [33, 23, 2, 10, 434, 5000, 1];
// // Math.max.apply(null, numeros);
// // Math.max.call(null, 3, 4, 5, 6, 7, 20); 

// // const li = document.querySelectorAll('li');

// // const filtrarLi = Array.prototype.filter.bind(li, function(item) {
// //   return item.classList.contains('ativo');
// // });

// // filtrarLi();const numeros = [33, 23, 2, 10, 434, 5000, 1];
// // Math.max.apply(null, numeros);
// // Math.max.call(null, 3, 4, 5, 6, 7, 20); 

// // const li = document.querySelectorAll('li');

// // const filtrarLi = Array.prototype.filter.bind(li, function(item) {
// //   return item.classList.contains('ativo');
// // });

// // filtrarLi();

// const $ = document.querySelectorAll.bind(document);

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }

// console.log(carro.acelerar(100, 20));

// const honda = {
//   marca: 'Honda'
// }

// const acelerarHonda = carro.acelerar.bind(honda);

// console.log(acelerarHonda(100, 20));

// function imc(altura, peso) {
//   return peso / (altura * altura);
// }

// const imc180 = imc.bind(null, 1.80);

// imc(1.80, 70); // 21.6
// imc180(70); // 21.6

// questions
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p');
const totalCaracter = Array.prototype.reduce.call(p,(acumulador, p) => {
  return acumulador + p.innerHTML.length;
}, 0);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createHTML(tag, classe, conteudo) {
  let element = document.createElement(tag);
  element.classList.add(classe);
  element.innerHTML = conteudo;
  return element;
}

const oi = createHTML('span','oi','ola mundo')

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
createH1 = createHTML.bind(null, 'h1', 'titulo');

const h1 = createH1('Bem vindo');