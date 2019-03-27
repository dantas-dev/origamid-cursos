import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordionList from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import {teste1, teste2 as testando} from './modules/teste.js'
import * as teste2 from './modules/teste2.js'

initScrollSuave();
initAnimacaoScroll();
initAccordionList();
initTabNav();

teste1();
testando();
console.log(teste2);
teste2.teste3();
teste2.teste4();
console.log(teste2.senha);

console.log(this);