
// var ultimoItem = videoGames.pop();

for (var numero = 1; numero <= 4; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas)
});

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

var m = 1;
do {
console.log(m);
m++;
} while(m <= 5)

/* Questions */
// 1
var brazilWC = [1959, 1962, 1970, 1994,2002];

// 2
brazilWC.forEach(function(year){
  console.log(`O Brasil ganhou a copa de ${year}`);
});

// 3
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var f = 0; f <= frutas.length; f++){
  console.log(frutas[f]);
  if(frutas[f] === 'Pera') { break; }
}

// 4
// lastFruit = frutas.pop();
lastFruit = frutas[frutas.length -1];
// frutas.push(lastFruit);
// console.log(lastFruit, frutas);