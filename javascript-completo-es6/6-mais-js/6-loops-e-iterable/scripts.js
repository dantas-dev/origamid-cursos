// const frutas = ['Banana', 'Morango', 'Uva'];
//  

// for(const fruta of frutas) {
//   console.log([fruta, frutas])
// }

// for(const letra of frase) {
//   console.log(letra);
// } 

// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.background = 'blue';
// }

// console.log(...buttons);


// const carro = {
//   marca: 'fiat',
//   ano: 2003
// }

// Object.defineProperties(carro, {
//   rodas: {
//     value: 4,
//     enumerable: false
//   }
// })

// for(const key in carro) {
//   console.log(key, carro[key]);
// }

// const movies = ['jumanji', 'lost', 'amnesia'];

// for(const index in movies) {
//   console.log(index, movies[index]);
// }

// const btnUnico = document.querySelector('button');
// const btnStyles = getComputedStyle(btnUnico);

// for(style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

// let i = 0;
// do {
//   console.log(i++)
// } while (i <= 5);


// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

// questions

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const list = document.querySelectorAll('li');

for(li of list) {
  li.classList.add('active');
}


// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for(key in window) {
  console.log(`${key}: ${window[key]}`);
}