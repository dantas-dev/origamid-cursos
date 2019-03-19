// // // const comida = 'Pizza';
// // // const bebida = new String('Agua');
// // // console.log(
// // //   typeof comida,
// // //   comida.toLowerCase(),
// // //   comida.length,
// // //   comida[0],
// // //   typeof bebida,
// // //   bebida.toLowerCase(),
// // //   bebida.length,
// // //   bebida[0]
// // // );

// // // const frase = 'Faça elevar o cosmo do seu coração';
// // // console.log(
// // //   frase[--frase.length],
// // //   frase.charAt(--frase.length)
// // // );

// // const frase = 'A melhor linguagem é ';
// // const linguagem = 'JavaScript';

// // const fraseCompleta = frase.concat(linguagem, '!!');

// // const fruta = 'Banana';
// // const listaFrutas = 'Melancia, Banana, Laranja';
// // console.log(
// //   listaFrutas.includes(fruta),
// //   listaFrutas.includes(fruta, 14),
// //   fruta.includes(listaFrutas)
// // );

// // console.log(
// //   fruta.startsWith('Ba'),
// //   fruta.endsWith('na')
// // );

// // const transacao1 = 'Depósito de cliente';
// // const transacao2 = 'Depósito de fornecedor';
// // const transacao3 = 'Taxa de camisas';

// // transacao1.slice(0, 3); // Dep
// // transacao2.slice(0, 3); // Dep
// // transacao3.slice(0, 3); // Tax
// // transacao1.slice(2, -11) // pósito

// // transacao1.slice(12); // cliente
// // transacao1.slice(-4); // ente
// // transacao1.slice(3, 6); // ósi

// // const linguagem1 = 'JavaScript';
// // linguagem1.substring(3,5); // aS
// // linguagem1.substring(0,4); // Java
// // linguagem1.substring(4); // Script
// // linguagem1.substring(-3); // JavaScript

// // const instrumento = 'Guitarra';

// // instrumento.indexOf('r'); // 5
// // instrumento.lastIndexOf('r'); // 6
// // instrumento.indexOf('ta'); // 3

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// listaPrecos[0].padStart(10, '.'); // .....R$ 99
// listaPrecos[0].padEnd(10, '.');   // R$ 99.....

//   console.log(listaPrecos[0].repeat(4));

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ');

// let preco = 'R$ 1200,43';
// preco = preco.replace(',', '.'); // 'R$ 1200.43'

// const arrayLista = listaItens.split(', ');

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// const htmlArray = htmlText.split('div');
// const htmlNovo = htmlArray.join('section');

// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// (sexo1.toLowerCase() === 'feminino'); // true
// (sexo2.toLowerCase() === 'feminino'); // true
// (sexo3.toLowerCase() === 'feminino'); // true


// const valor = '  R$ 23.00   ' 
// valor.trim(); // 'R$ 23.00'
// valor.trimStart(); // 'R$ 23.00   '
// valor.trimEnd(); // '  R$ 23.00'

// QUESTIONS
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let total = 0;
transacoes.forEach((item) => {
  let valor = item.valor.replace('R$ ', '');
  valor = parseInt(valor);
  total += valor;
});

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const veiculos = transportes.split(';');
console.log(veiculos);


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(
  html.split('span').join('a')
);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(--frase.length));


// Retorne o total de taxas
const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
const taxa = [];
transacoes1.forEach((transacao) => {
  transacao = transacao.toLowerCase().trim();
  if(transacao.includes('taxa')) {
    taxa.push(transacao);
  }
})