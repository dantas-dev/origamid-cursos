import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  
}

async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJSON = await animaisResponse.json();
  const numerosGrid = document.querySelector('.numeros-grid');

  animaisJSON.forEach(animal => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });

  initAnimaNumeros();
}

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numero-animal');

  div.innerHTML = `
  <h3>${animal.especie}</h3>
  <span data-numero>${animal.total}</span>`;
  return div;
}

fetchAnimais('./animaisapi.json');