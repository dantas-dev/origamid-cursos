import DolarHoje from './DolarHoje.js';

export default {
  name: 'AcaoHoje',
  data() {
    return {
      valorMercado: 0,
    }
  },
  template: `
  <div>
  <p>Valor da Apple: {{valorMercado}}</p>
  <dolar-hoje></dolar-hoje>
  </div>
  `,
  methods: {
    async puxarAcao() {
      const response = await fetch('https://api.iextrading.com/1.0/stock/aapl/quote');
      const data = await response.json();

      this.valorMercado = data.marketCap;
    }
  },
  components: {
    DolarHoje,
  },
  created() {
    this.puxarAcao();
  }
}