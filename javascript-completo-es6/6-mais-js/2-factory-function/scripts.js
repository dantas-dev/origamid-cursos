// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
//   return {
//     text,
//     element
//   }
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome,
//     sobrenome,
//     andar,
//     nadar,
//   }
// }

// const dev = criarPessoa('Eduardo', 'Dantas');
// console.log(dev);

// 'use strict';

// function criarAnimal(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;
//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   return Object.freeze({
//     nome,
//     sobrenome,
//     andar,
//   });
// }

// const bird = criarAnimal('Louro', 'José');
// console.log(bird);

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) // ou (!new.target)
//     return new Pessoa(nome);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const pessoa = Pessoa('Eduardo');
// console.log(pessoa);


// like jquery
function $(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass
  }
}

const btns = $('button');