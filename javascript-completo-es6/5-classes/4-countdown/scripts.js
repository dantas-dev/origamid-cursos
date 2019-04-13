import Countdown from './countdown.js';

const tempoNatal = new Countdown('24 December 2019 23:59:59 GMT-0300');
const tempoAnoNovo = new Countdown('31 December 2019 23:59:59 GMT-0300');

// console.log(tempoNatal.days);
// console.log(tempoNatal.hours);
// console.log(tempoNatal.seconds);


const div = document.createElement('div');
document.body.appendChild(div);

setInterval(() => {
  div.innerHTML = `
  <p>Tempo para o Natal</p>
  <p>${tempoNatal.total.days}:${tempoNatal.total.hours}:${tempoNatal.total.minutes}:${tempoNatal.total.seconds}</p>
`
});

console.log(tempoNatal.total);
console.log(tempoAnoNovo.total);