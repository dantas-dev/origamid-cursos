// const carro = {
//   marca: 'default',
//   preco: 0
// }

// const honda = carro;
// honda.marca = 'honda';
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = 'fiat';
// fiat.preco = 3000;

// funcao construtora
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 2000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const preco = precoInicial * taxa;
  this.marca = marca;
  this.preco = preco;
  console.log(this);
}

const mazda = new Carro2('Mazda', 5000);