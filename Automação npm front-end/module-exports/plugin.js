function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

function quadrado(numero) {
  let quadrado = numero * numero;
  return quadrado;
}

module.exports.imc = imc;
module.exports.quadrado = quadrado;