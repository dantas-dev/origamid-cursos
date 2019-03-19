// // // metodos diretos
// // console.log(
// //   Number.isNaN(NaN),
// //   Number.isInteger(20),
// //   Number.isInteger(20.1),
// //   Number.parseFloat('32.20'),
// //   Number.parseFloat('$32.20'),
// //   Number.parseFloat('32.20 reais'),
// //   Number.parseInt('32.20')
// // );

// // // metodos do prototipo
// // const preco = 2.99;
// // preco.toFixed(); // 3

// // const carro = 1000.455;
// // carro.toFixed(2) // 1000.46

// // const preco2 = 1499.49;
// // preco2.toFixed() // 1499

// // const preco3 = 2.99;
// // preco.toString(10); // '2.99'

// // const moeda = 59.49;
// // console.log(
// //   moeda.toLocaleString('en-US', {style: 'currency', currency: 'USD'}), // $59.49
// // moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 59,49
// // );

// console.log(Math);
// Math.abs(-5.5); // 5.5
// Math.ceil(4.8334); // 5
// Math.ceil(4.3); // 5
// Math.floor(4.8334); // 4
// Math.floor(4.3); // 4
// Math.round(4.8334); // 5
// Math.round(4.3); // 4

// Math.max(5,3,10,42,2); // 42
// Math.min(5,3,10,42,2); // 2

// let min = 1;
// let max = 2;
// const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(aleatorio);

//QUESTIONS

// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;
const rand = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const strArrayNum = numeros.split(', ');
let intArrayNum = [];
strArrayNum.forEach((num) => {
  intArrayNum.push(+num);  
});

console.log(Math.max.apply(null, intArrayNum));


// // Crie uma função para limpar os preços
// // e retornar os números com centavos arredondados
// // depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let total = 0;
listaPrecos.forEach((preco) => {
  const precoLimpo = limparPreco(preco)
  ;
  total += precoLimpo;
});

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}

console.log(total);