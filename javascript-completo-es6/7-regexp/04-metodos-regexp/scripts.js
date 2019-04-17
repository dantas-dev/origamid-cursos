// const regexp = /\w+/gi;

// const regexp1 = new RegExp('\\w+', 'gi');

// const frase = 'JavaScript Linguagem 101';
// console.log(frase.replace(regexp, 'x'));
// console.log(frase.replace(regexp1, 'x'));

// console.log(
//   regexp.flags,
//   regexp.global,
//   regexp.ignoreCase,
//   regexp.multiline,
//   regexp.source
// );

// const regexp = /Java/g;
// const frase = 'JavaScript e Java e Java';

// // console.log(
// //   regexp.lastIndex,
// //   regexp.test(frase),
// //   regexp.lastIndex,
// //   regexp.test(frase),
// //   regexp.lastIndex,
// //   regexp.test(frase),
// // );

// let i = 1;
// while(regexp.test(frase)) {
//   console.log(
//     regexp.lastIndex,
//     i++
//   );
// }


// const frase = 'JavaScript, TypeScript e CoffeeScript, Java';
// const regexp = /\w{2,}/g;

// // console.log(
// //   regexp.exec(frase),
// //   regexp.exec(frase),
// //   regexp.exec(frase),
// //   regexp.exec(frase),
// //   regexp.exec(frase)
// // );

// let regexpResult;
// while((regexpResult = regexp.exec(frase)) !== null) {
//   console.log(regexpResult[0]);
// }

// const frase = 'JavaScript, TypeScript CoffeeScript, Java';
// const regexp = /\w+/g;
// const regexpSemFlag = /\w+/;

// const resultados = frase.match(regexp);
// const resultadosSemFlag = frase.match(regexpSemFlag);

// console.log(
//   resultados,
//   resultadosSemFlag
// );

// const regexpSplit = /Script/g;

// const resultadosSplit = frase.split(regexpSplit);

// console.log(
//   resultadosSplit
// );

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;


// const regexp = /(?<=<\/?)\w+/g;

// const resultado = tags.replace(regexp, '$& a');
// console.log(resultado);

// const emails = `
// empresa@email.com
// contato@email.com
// suporte@email.com
// `;

// const regexp = /(\w+@)[\w.]+/g;

// const resultado = emails.replace(regexp, '$1dantasdev.com - $&');

// console.log(resultado);

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
contato@dantasdev.com`;

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function (...args) {
  // console.log(args);
  if(args[2] === 'homail.com.br') {
    return `${args[1]}hotmail.com.br`;
  } else if(args[2] === 'ggmail.com.br') {
    return `${args[1]}gmail.com.br`;
  } else if(args[2] === 'oulook.com.br') {
    return `${args[1]}outlook.com.br`;
  } else {
    return args[0];
  }
});

console.log(resultado);