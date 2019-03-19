// // //const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// // const precos = [49, 99, 69, 89];

// // const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];


// // const carros = new Array('ford','fiat','honda');

// // // console.log(carros[2]);

// // const li = document.querySelectorAll('li');
// // const arrayLi = Array.from(li);

// // // array-like
// // const obj = {
// //   0: 'eduardo',
// //   1: 'dantas',
// //   2: 'teste',
// //   length: 3
// // };

// // const objArray = Array.from(obj);
// // Array.isArray(objArray); //true

// // Array.of(10); // [10]
// // Array.of(1,2,3,4); // [1,2,3,4]
// // new Array(5); // [,,,,]
// // Array(5); // [,,,,]
// // Array(1,2,3,4); // [1,2,3,4]

// // const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// // frutas.length; // 3

// // frutas[0].length; // 6
// // frutas[1].length; // 5
// // frutas[2].length; // 2

// // const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// // instrumentos.sort();
// // instrumentos; // ['Baixo', 'Guitarra', Violão]

// // const idades = [32,21,33,43,1,12,8];
// // idades.sort();
// // idades; // [1, 12, 21, 32, 33, 43, 8]

// // const carros1 = ['Ford', 'Fiat', 'VW'];
// // carros1.unshift('Honda', 'Kia'); // 5
// // carros1; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

// // carros1.push('Ferrari'); // 6
// // carros1; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

// // const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
// // const primeiroCarro = carros3.shift(); // 'Ford'
// // carros3; // ['Fiat', 'VW', 'Honda'];

// // const ultimoCarro = carros3.pop(); // 'Honda'
// // carros3; // ['Fiat', 'VW'];

// // carros.reverse() //["honda", "fiat", "ford"]

// // const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// // carros.splice(1, 0, 'Kia', 'Mustang'); // []
// // carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// // carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
// // carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// // ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// // // ['Item1', 'Item2', 'Item1', 'Item2']

// // ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// // // ['Item1', 'Item2', 'Item3', 'Item1']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// // ['Banana', 'Banana', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// // ['Item1', 'Item2', 'Banana', 'Banana']

// ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// // ['Item1', 'Banana', 'Banana', 'Item4']

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];
// const transportes = transporte1.concat(transporte2);
// // ['Barco', 'Aviao', 'Carro', 'Moto'];

// const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// // ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

// linguagens.includes('css'); // true
// linguagens.includes('ruby'); // false
// linguagens.indexOf('python'); // 4
// linguagens.indexOf('js'); // 2
// linguagens.lastIndexOf('js'); // 5

// const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
// linguagens1.join(); // 'html,css,js,php,python'
// linguagens1.join(' '); // 'html css js php python'
// linguagens1.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

// const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
// linguagens3.slice(3); // ['php', 'python']
// linguagens3.slice(1, 4); // ['css', 'js', 'php']

// const cloneLinguagens = linguagens3.slice();

//question
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const comidaFirst = comidas.shift();
const comidaLast = comidas.pop();
// console.log(comidaFirst, comidaLast, comidas);
// comidas.push('Arroz');
// console.log(comidas);
// comidas.unshift('Peixe', 'Batata');
// console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
// estudantes.sort();
// console.log(estudantes);
// estudantes.reverse();
// console.log(estudantes);
// console.log(estudantes.includes('Joana'));
// console.log(estudantes.includes('Juliana'));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
let newHTML = html.split('section').join('ul');
newHTML = newHTML.split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const newCarros = carros.slice();
carros.pop();
console.log(carros, newCarros);