// console.log(typeof Array);
// console.log(typeof Naoexisto);

// if (typeof Array.from !== "undefined")
// if (typeof Naoexisto !== "undefined");

//questions
// Liste 5 objetos nativos
Array
Object
String
Function
Number

// Liste 5 objetos do browser
Window
History
Document
HTMLCollection
NodeList


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

// chrome
if(typeof document.webkitIsFullScreen !== 'undefined') {
  console.log('Existe no chrome'); 
} else {
  console.log('Não existe no firefox');
}

// firefox
if(typeof document.mozFullScreen !== 'undefined') {
  console.log('Existe no firefox'); 
} else {
  console.log('Não existe no chrome');
}