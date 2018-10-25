// const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach(function(item, index, array) {
//   // console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array) {
  // console.log(item, index, array);
});

// imgs.forEach((item, index, array) =>{
//   // console.log(item, index, array);
// });

// let x = imgs.length;
// imgs.forEach(() => console.log(--x));

// Questions

//1 
const allP = document.querySelectorAll('p');
console.log(allP);

//2
allP.forEach((item) => {
  console.log(item.innerText);
});

//3 
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
console.log(i++);
});

imgs.forEach(() => i++);