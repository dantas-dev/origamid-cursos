// // // // // const carros = ['ford', 'fiat', 'honda'];

// // // // // carros.forEach((item, index, array) => {
// // // // //   console.log(item, index, array);
// // // // // });

// // // // // const li = document.querySelectorAll('li');

// // // // // li.forEach(i => i.classList.add('ativa'));

// // // // // const retornoForeach = li.forEach(function(item) {
// // // // //   item.classList.add('ativa');
// // // // // });

// // // // // console.log(retornoForeach);

// // // // const carros = ['ford', 'fiat', 'honda'];

// // // // const novaArray = carros.map((item, index, array) => {
// // // //   console.log(item, index, array);

// // // //   return item + ' ' + index;
// // // // });

// // // // const numeros = [2, 4, 5, 7, 78];
// // // // const numerosX2 = numeros.map(n => n * 2)

// // // // const aulas = [
// // // //   {
// // // //     nome: 'HTML 1',
// // // //     min: 15
// // // //   },
// // // //   {
// // // //     nome: 'HTML 2',
// // // //     min: 10
// // // //   },
// // // //   {
// // // //     nome: 'CSS 1',
// // // //     min: 20
// // // //   },
// // // //   {
// // // //     nome: 'JS 1',
// // // //     min: 25
// // // //   },
// // // // ]

// // // // const tempoAulas = aulas.map(aula => aula.min);

// // // // const nomeAulas = aula => aula.nome;

// // // // const arrayNomeAulas = aulas.map(nomeAulas);

// // // // console.log(arrayNomeAulas);
// // // // console.log(tempoAulas);

// // // // const aulas = [10, 25, 30];

// // // // const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
// // // //   console.log(acumulador, item, index ,array);
// // // //   return acumulador + item;
// // // // }, 0);

// // // // const numeros = [10, 25, 60, 5, 35, 10];

// // // // const maiorValor = numeros.reduce((anterior, atual) => {
// // // //   return anterior < atual ? atual : anterior;
// // // // });
// // // // console.log(numeros)
// // // // console.log(maiorValor);

// // // const aulas = [
// // //   {
// // //     nome: 'HTML 1',
// // //     min: 15
// // //   },
// // //   {
// // //     nome: 'HTML 2',
// // //     min: 10
// // //   },
// // //   {
// // //     nome: 'CSS 1',
// // //     min: 20
// // //   },
// // //   {
// // //     nome: 'JS 1',
// // //     min: 25
// // //   },
// // // ]

// // // const listaAulas = aulas.reduce((acumulador, atual, index) => {
// // //   acumulador[index] = atual.nome;
// // //   return acumulador;
// // // }, {})

// // // console.log(listaAulas);

// // // const frutas = ['Banana', 'Pêra', 'Uva'];

// // // const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// // // const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// // // frutasRight; // Uva Pêra Banana
// // // frutasLeft; // Banana Pêra Uva
// // // console.log(
// // //   frutasRight,
// // //   frutasLeft
// // // )

// // const frutas = ['Banana', 'Pêra', 'Uva'];
// // const temUva = frutas.some((fruta) => {
// //   return fruta === 'Uva';
// // }); // true

// // function maiorQue100(numero) {
// //   return numero > 100;
// // }
// // const numeros = [0, 43, 22, 88, 101, 2];
// // const temMaior = numeros.some(maiorQue100); // true

// // const frutas1 = ['Banana','', 'Pêra', 'Uva'];
// // const every = frutas1.every((fruta) => {
// //   return fruta === 'Uva';
// // }); // false

// // const numeros1 = [6, 43, 22, 88, 101, 29];
// // const maiorQue3 = numeros1.every(num => num > 3); // true

// // const frutas = ['Banana','', 'Pêra', 'Uva'];

// // const indexUva = frutas.findIndex(item => item === 'Uva');

// // const itemUva = frutas.find(item => item === 'Uva');

// // const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

// // const arrayFrutas = frutas.filter((item) => {
// //   console.log(item);
// //   return item;
// // });

// // console.log(arrayFrutas);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const maiores15 = aulas.filter((aula) => {
//   return aula.min > 15;
// });

// QUESTIONS

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let cursos = document.querySelectorAll('.curso');
cursos = Array.from(cursos);
let arrayCursos = cursos.map((item) => {
  return {
    titulo: item.querySelector('h1').innerText,
    descricao: item.querySelector('p').innerText,
    aulas: +item.querySelector('.aulas').innerText,
    horas: +item.querySelector('.horas').innerText
  }
});


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(n => n > 100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const hasBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
});



// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

newCompras = compras.map((compra) => {
  return Number.parseFloat(compra.preco.replace('R$', '').replace(',','.').trim());
});

const totalCompras = newCompras.reduce((acumulador, atual) => {
  return acumulador + atual;
}, 0);