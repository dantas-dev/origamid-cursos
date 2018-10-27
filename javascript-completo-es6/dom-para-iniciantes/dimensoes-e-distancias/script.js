// const listaAnimais = document.querySelector('.animais-lista');

// console.log(`clientHeight: ${listaAnimais.clientHeight}`);
// console.log(`scrollHeight: ${listaAnimais.scrollHeight}`);

// const animaisTop = listaAnimais.offsetTop;
// const animaisLeft = listaAnimais.offsetLeft;
// console.log(`Top: ${animaisTop} Left: ${animaisLeft}`);

// const rect = document.querySelector('h2').getBoundingClientRect();

// console.log(rect);
// if(rect.top < 0) {
//   console.log('H2(raposa) saiu da dela.');
// }

// /* window */
// console.log(
//   window.innerHeight,
//   window.outerHeight,
//   window.outerWidth,
//   window.innerWidth,
//   window.pageYOffset,
//   window.pageXOffset
// );

// if(window.innerWidth < 600) {
//   console.log('A tela e menor que 600px');
// }

// //forma ideal para verificar tamanho da tela
// const small = window.matchMedia('(max-width: 800px)');

// if(small.matches) {
//   console.log('Tela menor que 800px');
// } else {
//   console.log('Tela maior que 800px');
// }

/* Questions */
// 1
const firstIMG = document.querySelector('img');
console.log(`Primeira imagem: ${firstIMG.offsetTop}`);

// 2
//onload so roda a função apos carregar tudo
window.onload = () => {
  const allIMG = document.querySelectorAll('img');
  let sum = 0;
  allIMG.forEach((item, index) => {
  console.log(`Img[${index}]: ${item.offsetWidth} width.`);
  sum += item.offsetWidth;
  });
  console.log(`Soma total: ${sum}`);
};

// 3
const allLinks = document.querySelectorAll('a');
allLinks.forEach((item, index) => {
    x = item.clientHeight;
    y = item.clientWidth;
    if(x >= 48 && x >= 48) {
      console.log(`${index}.Link possue tamanho recomendado.`);
    } else {
      console.log(`${index}.Link não possue tamanho recomendado.`);
    }
});

// 4
const menuMobile = window.matchMedia('(max-width: 720px)').matches;

if(menuMobile) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}