const plugin = require('./plugin');
const moment = require('moment');

console.log(moment().endOf('day').fromNow());

console.log(plugin.imc(85, 1.7));
console.log(plugin.quadrado(5));