// // function perimetroForma(lado, totalLados = 4) {
// //   const argArray = Array.from(arguments);
// //   argArray.forEach((arg) =>{ console.log(arg)});
// //   return lado * totalLados;
// // }

// // perimetroForma(10, 4); // 40
// // perimetroForma(10); // NaN

// // function anunciarGanhadores(premio, ...ganhadores) {
// //   ganhadores.forEach(ganhador => {
// //     console.log(ganhador + ' ganhou um ' + premio)
// //   });
// // }

// // anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas, 'Pizza', ...legumes];

// console.log(comidas);

// const numbers = [ 6004, 6067, 6079, 6080, 6083, 6091, 6105, 6195, 6204, 6222, 6253, 6292, 6305, 6307, 6342, 6344, 6395, 6413, 6425, 6426, 6427, 6444, 6448, 6459, 6472, 6486, 6500, 6518, 6529, 6531, 6637, 6645, 6667, 6728, 6748, 6804, 6828, 6839, 6871, 6883, 6904, 6928, 6934, 6950, 7000, 7023, 7044, 7046, 997];

// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// const links = document.querySelectorAll('a');
// console.log(links);
// const linksArray = [...links];
// console.log(linksArray);

// quetions
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  return buttonElement;
} 

const redButton = createButton();

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);