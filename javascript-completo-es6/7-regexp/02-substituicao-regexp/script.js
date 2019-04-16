// Procura: Java
const regexp = /Java/g;

'PHP e Java são linguagens diferentes'.replace(regexp, '--$&Script');
// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
const regexp = /(\w+)@[\w.]+/g;

'andre@email.com.br'.replace(regexp, '$1@gmail.com');
// andre@gmail.com

// Procura: sequência alfanumérica, seguida
// de , seguido espaço de sequência alfanumérica.
const regexp = /(\w+),\s(\w+)/g;

'Rafael, Andre'.replace(regexp, '$2 $1');
// Andre Rafael

// Procura: qualquer sequência de ta
const regexp = /(ta)+/gi;

'Tatata, tata, ta'.replace(regexp, 'Pá');
// Pá, Pá, Pá

// Procura: qualquer sequência de ta
const regexp = /(?:ta)+/gi;

'Tatata, tata, ta'.replace(regexp, 'Pá');
// Pá, Pá, Pá

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexp = /\d(?=px)/g;

'2em, 4px, 5%, 2px, 1px'.replace(regexp, 'X');
// 2em, Xpx, 5%, Xpx, Xpx

// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexp = /\d(?!px)/g;

'2em, 4px, 5%, 5px, 1px'.replace(regexp, 'X');
// Xem, 4px, X%, 5px, 1px

// Procura: dígitos que possuírem R$
// na frente dos mesmos
const regexp = /(?<=R\$)[\d]+/g;

'R$99, 100, 200, R$20'.replace(regexp, 'X');
// R$X, 100, 200, R$X
