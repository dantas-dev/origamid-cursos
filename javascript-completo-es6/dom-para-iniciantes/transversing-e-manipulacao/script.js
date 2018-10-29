// //transversing
// const h1 = document.querySelector('h1');

// console.log('innerHTM:', h1.innerHTML);
// console.log('outerHTML:', h1.outerHTML);
// console.log('innerText:', h1.innerText);

// h1.addEventListener('mouseover', (event) => {
//   h1.innerText = 'Passaram o mouse em mim';
// });

// const lista = document.querySelector('.animais-lista');

// console.log('Pai:', lista.parentElement);
// console.log('Avô:', lista.parentElement.parentElement);
// console.log('Próximo irmão:', lista.nextElementSibling);
// console.log('Irmão anterior:', lista.previousElementSibling);

// console.log('HTMLCollection filhos:', lista.children);
// console.log('Primeiro filho:', lista.children[0]);
// console.log('Ultimo filho:', lista.children[--lista.children.length]);

// console.log('Ultimo filho(via queryselector):',lista.querySelector('li:last-child'));

// console.log(lista.childNodes);
// console.log(lista.firstChild);
// console.log(lista.previousSibling);

// //manipulaçao de elemento
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// // animais.appendChild(titulo);
// // contato.insertBefore(animais, mapa);
// // contato.removeChild(titulo);
// // contato.replaceChild(lista, titulo);


// //create elements
// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'New Title';
// novoH1.classList.add('titulo');

// mapa.appendChild(novoH1);


// //clone element
// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// faq.appendChild(cloneH1);


// Questions

// 1
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// 2
const faqLista = document.querySelector('.faq-lista');
const firstDT = faqLista.children[0]
console.log(firstDT);

// 3
console.log(firstDT.nextElementSibling);


// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
// document.body.replaceChild(animais, faq);
faq.innerHTML = animais.innerHTML;