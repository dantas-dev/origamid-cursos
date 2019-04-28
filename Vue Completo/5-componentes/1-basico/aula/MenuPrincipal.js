import BotaoContador from './BotaoContador.js';

export default {
  name: 'MenuPrincipal',
  template: `
    <ul>
      <li>Home</li>
      <li>Sobre</li>
      <li><botao-contador></botao-contador></li>
      <li>Contato</li>
    </ul>
  `,
  components: {
    BotaoContador,
  }
}