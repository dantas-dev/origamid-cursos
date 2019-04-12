// const button = {
//   get tamanho() {
//     return this._numero || 0;
//   },
//   set tamanho(numero) {
//     this._numero = numero;
//   }
// }

// const matematica = {
//   get PI() {
//     return 3.14;
//   }
// }

// matematica.PI; // get (3.14)
// matematica.PI = 20; // nada acontece

// const frutas = {
//   lista: [],
//   set nova(fruta) {
//     this.lista.push(fruta);
//   }
// }

// frutas.nova = 'Uva';
// frutas.nova = 'Pêra';
// frutas.nova = 'Maçã';

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton);