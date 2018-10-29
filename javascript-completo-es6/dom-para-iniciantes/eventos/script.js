// const img = document.querySelector('img');

// function callback(event) {
//   console.log('click', event);
// }

// img.addEventListener('click', callback);

// const animalsList = document.querySelector('.animais-lista');

// function callbackList(event) {
//   console.log('current target:',event.currentTarget);
//   console.log('target:',event.target);
//   console.log('type:',event.type);
//   console.log('path:',event.path);
// }

// animalsList.addEventListener('click', callbackList);


// const linkExt = document.querySelector('a[href^="http"]');

// function handleLinkExt(event) {
//   event.preventDefault();
//   console.log('click');
//   console.log(this);
//   console.log(this.getAttribute('href'));
//   console.log(event.currentTarget);
// }

// linkExt.addEventListener('click', handleLinkExt);

// // const h1 = document.querySelector('h1');

// // function handleEvent(event) {
// //   console.log(event.type, event);
// // }

// // h1.addEventListener('click', handleEvent);
// // h1.addEventListener('mouseenter', handleEvent);
// // h1.addEventListener('mousemove', handleEvent);

// // window.addEventListener('scroll', handleEvent);
// // window.addEventListener('resize', handleEvent);
// // window.addEventListener('keydown', handleEvent);

// //keyboard
// function handleKeyboard(event) {
//   if(event.key === 'f') {
//     document.body.classList.toggle('fullscreen');
//   }
//   console.log(event.key)
// }

// window.addEventListener('keydown', handleKeyboard);

//foreach-events
// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//   console.log(event.target);
//   this.classList.add('click');
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', handleImg);
// });

/* Questions */
// 1
const internalLinks = document.querySelectorAll('a[href^="#"');

function handleLinks(event){
  event.preventDefault();

  internalLinks.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.classList.toggle('ativo');
}

internalLinks.forEach((link,index,links) => {
  link.addEventListener('click', handleLinks);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allBody = document.querySelectorAll('body *');

function bodyItems(event) {
  console.log(event.currentTarget)
}

allBody.forEach((element) => {
  element.addEventListener('click', bodyItems);
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function bodyItemsRemove() {
  this.remove();
}

allBody.forEach((element) => {
  element.addEventListener('click', bodyItemsRemove);
});



// Se o usuário clicar na tecla (t), aumente todo o texto do site.
window.addEventListener('keydown', (event) => {
  if(event.key === 't' || event.key === 'T') {
    document.documentElement.classList.toggle('change-font');
  }
});