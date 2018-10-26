// const menu = document.querySelector('.menu');

// console.log(menu.classList);
// console.log(menu.classList[1]);

// //add class
// menu.classList.add('ativo');
// console.log('add class',menu.classList);
// //remove class
// menu.classList.remove('azul');
// console.log('remove class', menu.classList);
// //add more class
// menu.classList.add('teste1', 'teste2');
// console.log('add more class', menu.classList);

// //toggle class
// menu.classList.toggle('isHere');
// console.log('toggle class',menu.classList);
// menu.classList.toggle('isHere');
// console.log('toggle class',menu.classList);

// if(menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul');
// } else {
//   menu.classList.add('nao-possui-azul');
// }

// console.log('contains class', menu.classList);

// //antigamente:
// console.log(menu.className);

// //change classes
// menu.className = 'um dois tres';
// console.log(menu.classList);

// //add class 
// menu.className += ' vermelho'
// console.log(menu.classList);

// //atributos
// console.log('*******************************************');
// console.log('*************** attributes: ***************');
// console.log('*******************************************');
// const animais = document.querySelector('.animais');

// console.log(animais.attributes);
// console.log(animais.attributes[1]);
// console.log(animais.attributes[2]);
// console.log(animais.attributes.id);
// console.log(animais.attributes['data-texto']);

// const img = document.querySelector('img');

// // get attribute
// console.log(img.getAttribute('src'));
// console.log(img.getAttribute('alt'));

// //set attribute
// img.setAttribute('alt','Raposa - Fox');
// console.log(img.getAttribute('alt'));

// //check attibutes
// const hasAlt = img.hasAttribute('alt');
// console.log(hasAlt);

/* Questions */

// 1
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
  item.classList.add('ativo');
});

// 2
menuItems.forEach((item, index) => {
  if(index !== 0) {
    item.classList.remove('ativo');
  }
});

// 3
const allImgs = document.querySelectorAll('img');

allImgs.forEach((item, index) => {
  if(item.hasAttribute('alt')) {
  console.log(`Img ${++index} has alt`);
  } else {
    console.log(`Img ${++index} has not alt`);
  }
});

// 4
const linkExt = document.querySelector('.menu a[href^="http"]');
linkExt.setAttribute('href', 'https://github.com/EduD');
console.log(linkExt);