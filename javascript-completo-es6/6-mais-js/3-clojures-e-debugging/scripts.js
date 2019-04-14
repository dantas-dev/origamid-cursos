// let item1 = 1;
// function funcao1() {
//   let item2 = 2;
//   function funcao2() {
//     let item3 = 3;
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);
//   }
//   funcao2();
// }
// funcao1();

function contagem() {
  let total = 0;
  console.log(total);

  return function incremento() {
    total++;
    console.log(total);
  }
}

const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();
ativarIncremento();