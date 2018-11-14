// const comida = 'Pizza'; //retonar string
// const agua = new String('Agua'); //retorna objeto
// console.log(
//   typeof comida,
//   typeof agua
// );

// // mas ambos possuem propriedades e metodos do construtor string
// console.log(
//   comida.toUpperCase(),
//   agua.toUpperCase()
// );

// console.log(
//   comida.length,
//   agua.length
// );

// const frase = 'The best language in the entire world is';
// console.log(
//   'first ' + frase[0],
//   'center ' + frase[(frase.length / 2) - 1],
//   'last ' + frase[--frase.length]
// );

// console.log(
//   'first ' + frase.charAt(0),
//   'center ' + frase.charAt((frase.length / 2) - 1),
//   'last ' + frase.charAt(--frase.length)
// );

// const linguagem = ' Javascript';
// const fraseFinal = frase + linguagem;
// const fraseFinal1 = frase.concat(linguagem, '!!');

// console.log(
//   fraseFinal,
//   fraseFinal1
// );

// const fruta = 'Banana';
// const listaFrutas = 'Melancia, Banana, Laranja';

// console.log(
//   listaFrutas.includes(fruta),
//   fruta.includes(listaFrutas),
//   listaFrutas.includes(fruta, 15)
// );

// console.log(
//   fruta.endsWith('nana'),
//   fruta.startsWith('ba'),
//   fruta.startsWith('Ba'),
// );

// const transacao1 = 'Depósito de cliente';
// const transacao2 = 'Depósito de fornecedor';
// const transacao3 = 'Taxa de camisas';

// console.log(
// transacao1.slice(0, 3), 
// transacao2.slice(0, 3), 
// transacao3.slice(0, 3), 
// transacao1.slice(12), 
// transacao1.slice(-4), 
// transacao1.slice(0, -4), 
// transacao1.slice(3, 6)
// );

// console.log(
//   linguagem.substring(3,5),
//   linguagem.substring(0,4),
//   linguagem.substring(4),
//   linguagem.substring(-3),
// );

// console.log(
//   fruta,
//   fruta.indexOf('a'),
//   fruta.indexOf('na'),
//   fruta.lastIndexOf('a'),
//   fruta.lastIndexOf('na'),
// );

// console.log(
//   fruta.padStart(2, '.'),
//   fruta.padEnd(2, '.')
// )

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
// listaPrecos.forEach((preco) => {
// console.log(preco);
// })
// listaPrecos.forEach((preco) => {
// console.log(preco.padStart(10));
// })

// const frase2 = 'Ta';
// console.log(frase2.repeat(10));
// console.log(fruta.repeat(3));

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// console.log(listaItens);
// listaItens = listaItens.replace(/[ ]+/g, ', ');
// console.log(listaItens);
// let preco = 'R$ 1200,43';
// console.log(preco);
// preco = preco.replace(',', '.'); // 'R$ 1200.43'
// console.log(preco);

// const arrayLista = listaItens.split('s, ');
// console.log(arrayLista);

// const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
// console.log(htmlText);
// const htmlArray = htmlText.split('div');
// console.log(htmlArray);
// const newHtml = htmlArray.join('p');
// console.log(newHtml);

// // const frutasArray = ['banana', 'melancia','laranja'];
// // frutasArray.join('a');

// //bom para verificar input de usuario

// const sexo1 = 'Feminino';
// const sexo2 = 'feminino';
// const sexo3 = 'FEMININO';

// console.log(sexo1 === 'feminino');
// console.log(sexo2 === 'feminino');
// console.log(sexo3 === 'feminino');

// console.log(sexo1.toLowerCase() === 'feminino');
// console.log(sexo2.toLowerCase() === 'feminino');
// console.log(sexo3.toLowerCase() === 'feminino');

// const value = ' R$ 23.00 ';
// console.log(value);
// console.log(value.trim());
// console.log(value.trimStart());
// console.log(value.trimEnd());

// Questions
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

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = item.valor.replace('R$ ', '');
  if(item.descricao.slice(0, 4) === 'Taxa') {
    //'+' na frente da string transforma em numero
    taxaTotal += +numeroLimpo;
  } else {
    recebimentoTotal += +numeroLimpo;
  }
});
console.log(`Taxa total R$ ${taxaTotal}`);
console.log(`Recebimento total R$ ${recebimentoTotal}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlA = html.split('span').join('a');
console.log(html);
console.log(htmlA);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((transacao) => {
  if(transacao.trim().toLowerCase().includes('taxa')) {
    ++totalTaxas;
  }
});
console.log(totalTaxas);