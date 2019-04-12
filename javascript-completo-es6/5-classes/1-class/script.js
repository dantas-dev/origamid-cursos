// OLD WAY
// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerHTML = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element());

class Button {
  constructor(text, background, color){
    this.text = text;
    this.background = background;
    this.color = color;
  }

  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }

  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }

  static blueButton(text, background) {
    return new Button(text, 'blue', 'white');
  }
}

const botaoAzul = Button.blueButton('Ola Mundo');

// console.log(blueButton);

// class Button {
//   constructor(options) {
//     this.options = options;
//   }

//   static createButton(text, background) {
//     const ButtonElement = document.createElement('button');
//     ButtonElement.innerText = text;
//     ButtonElement.style.background = background;
//     return ButtonElement;
//   }
// }

// const blueButton = new Button({
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white'
// });

// console.log(blueButton);

// const blueButtonStatic = Button.createButton('Buy', 'red');
// console.log(blueButtonStatic);