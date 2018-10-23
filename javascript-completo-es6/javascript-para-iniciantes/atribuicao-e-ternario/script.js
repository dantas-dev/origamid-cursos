var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + numero2
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber)

var possuiFaculdade = false;
if(possuiFaculdade)
  console.log('Sim possui');
else
  console.log('Não possui')



hasGithub = 'yes' === 'yes' ? function () {
  console.log('sim');
}()   :function () {
  console.log('nao');
}()
console.log(hasGithub);

/* Questions */

//1
var scroll = 1000;
scroll += 500;

//2
var possuiCarro = true;
var possuiCasa = true;

var darCredito = (possuiCarro && possuiCasa);