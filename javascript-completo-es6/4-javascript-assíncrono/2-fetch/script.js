// const doc = fetch('./doc.txt');

// doc.then((resolucao) => {
//   return resolucao.text();
// }).then((body) => {
//   console.log(body);
//   conteudo.innerText = body;
// })

// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep.then(response => response.json())
// .then(cep => {
//   const conteudo = document.querySelector('.conteudo');
//   console.log(cep);
//   conteudo.innerText = cep.logradouro;
// });

// const styleElement = document.createElement('style');

// fetch('./style.css')
// .then(response => response.text())
// .then(style => {
//   styleElement.innerHTML = style;
//   document.body.appendChild(styleElement);
// });

// const sobre = fetch('./sobre.html');
// const div = document.createElement('div');
// sobre.then(response => response.text())
// .then(body => {
//   div.innerHTML = body;
//   document.body.appendChild(div)
// });

// const imagem = fetch('./imagem.png');
// const img = document.querySelector('img');
// imagem.then(response => response.blob())
// .then(body => {
//   const blobURL = URL.createObjectURL(body);
//   img.src = blobURL;
// });

// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep.then((response) => {
//   const response2 = response.clone();
  
//   response.text().then((text) => {
//     console.log(text);
//   });

//   response2.json().then((json) => {
//     console.log(json);
//   });
// })
// .then(body => {
//   console.log(body);
// });

// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep.then((response) => {
//   response.headers.forEach(console.log)
// })

// const div = document.createElement('div');

// fetch('https://viaceap.com.br/ws/01001000/json/')
// .then(response => {
//   console.log(response.status, response.ok);
//   if(response.status === 404) {
//     console.log('Página não encontrada')
//   }
// });

// const div = document.createElement('div');

// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => {
//   console.log(response.type, response.url);
// });

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites

// Questions
// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCEP = document.getElementById('cep');
const btnCEP = document.getElementById('btnCEP');
const resultadoCEP = document.querySelector('.resultadoCEP');

btnCEP.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  buscaCEP(inputCEP.value);
}

function buscaCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCEP.innerText = body;
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btc = document.querySelector('.btc');
function fetchBTC() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(body => {
    btc.innerText = `R$ ${body.BRL.buy}`.replace('.',',');
  })
}

fetchBTC();

setInterval(fetchBTC, 1000 * 30);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const joke = document.querySelector('.joke');
const next = document.querySelector('.next');

next.addEventListener('click', (e) => {
  e.preventDefault();
  getJoke();
});

function getJoke() {
  const get = fetch('https://api.chucknorris.io/jokes/random');

  get.then(response => response.json())
  .then(body => {
    joke.innerText = body.value;
  });
}

getJoke();