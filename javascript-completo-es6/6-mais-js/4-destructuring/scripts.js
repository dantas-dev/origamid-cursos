// const carro = {
//   marca: 'fiat',
//   ano: 1955
// }

// const {marca, ano} = carro;

// console.log(carro);
// console.log(marca);
// console.log(ano);

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// const {digitais, fisicas,
// digitais: { livros, videos }, fisicas: { cadernos }} = cliente.compras;

// const cliente = {
//   nome: 'Andre',
//   compras: 10,
// }

// const {nome, compras} = cliente;
// // ou
// const {nome: nomeCliente, compras: comprasCliente, email = 'contato@dantasdev.com'} = cliente;

// const frutas = ['Banana', 'Uva', 'Morango'];

// const primeiraFruta = frutas[0];
// const segundaFruta = frutas[1];
// const terceiraFruta = frutas[2];

// // Com destructuring
// const [primeira, segunda, terceira] = frutas;

// const primeiro = 'Item 1';
// const segundo = 'Item 2';
// const terceiro = 'Item 3';
// ou
// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 

// const handleKeyBoard = ({target, key, keyCode}) => {
//   console.log(key, keyCode, target);
// }

// window.addEventListener('keyup', handleKeyBoard);

// questions
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const {backgroundColor, color, margin} = getComputedStyle(btn);
console.log(backgroundColor, color, margin);


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

console.log(cursoAtivo, cursoInativo);

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: Bobcor} = cachorro;
