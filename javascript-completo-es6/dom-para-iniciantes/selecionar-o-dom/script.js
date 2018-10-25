const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const ul = document.getElementsByTagName('ul');
console.log(ul);

document.querySelector('.classname');

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionHTML[0]);
console.log(gridSectionNODE);
console.log(gridSectionNODE[0]);

gridSectionNODE.forEach(function(item, index){
  console.log(item, index);
});

//transformar array-like em array
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid)

arrayGrid.forEach(function(item, index) {
  console.log(item, index);
});

/* Questions */
//1
const allIMG = document.getElementsByTagName('img');
console.log(allIMG);

//2
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgImagem);

//3
const allLinks = document.querySelectorAll('[href^="#"]');

//4
const firstH2 = document.querySelector('.animais-descricao h2');

//5 
const allP = document.querySelectorAll('p');
const lastP = allP[--allP.length];