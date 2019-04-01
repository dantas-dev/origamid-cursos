// // // function espera(texto) {
// // //   console.log(texto);
// // // }
// // // setTimeout(espera, 5000, 'Depois de 5s');

// // // for(let i = 0; i < 20; i++) {
// // //   setTimeout(() => {
// // //     console.log(i);
// // //   }, 1000 * i);
// // // }

// // const btn = document.querySelector('button');

// // btn.addEventListener('click', handleClick);

// // function handleClick() {
// //   setTimeout(() => {
// //     this.classList.toggle('active');
// //   }, 1000);
// // }

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// // loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// const contarAte10 = setInterval(callback, 1000);

// let i = 0;
// function callback() {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(contarAte10);
//   }
// }

// questions
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// const changeBgColor = setInterval(() => {
//   const body = document.body;
//   if(body.getAttribute('style') !== 'background-color: blue;') {
//     body.style.backgroundColor = 'blue';
//   } else {
//     body.style.backgroundColor = 'red';
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

let i = 0;
let timer;

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerHTML = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  i = 0;
  tempo.innerHTML = 0;
}