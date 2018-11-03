// //Verificar se existe
// console.log(typeof Array.from !== "undefined");
// console.log(typeof Array.qualquercoisa !== "undefined");

// Questions
// Liste 5 objetos nativos
Array;
String;
Boolean;
Object;
Number;

// Liste 5 objetos do browser
window;
history;
document;
HTMLCollection;
NodeList;


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if( typeof document.webkitCancelFullScreen !== "undefined" ) {
  console.log('Existe');
} else {
  console.log('Não existe')
}
if( typeof document.webkitCurrentFullScreenElement !== "undefined" ) {
  console.log('Existe');
} else {
  console.log('Não existe')
}