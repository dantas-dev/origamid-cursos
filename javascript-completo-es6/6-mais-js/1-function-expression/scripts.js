// function somar(a, b) {
//   return a + b;
// }

// console.log(somar(3, 4));

// const somar = function(a, b) {
//   return a + b;
// }

// console.log(somar(3, 4));

// const somar = (a, b) => a + b;
// const quadrado = a => a * a;
// console.log(somar(3, 4));
// console.log(quadrado(4));

// // IIFE
// (function () {
//   console.log('hey');
// })();

// questions

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  console.log('Hi, Im a IIFE');
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
console.log(active(() => {
  return 'Just a callback';
}));