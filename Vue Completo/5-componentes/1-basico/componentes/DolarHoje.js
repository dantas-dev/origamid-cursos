export default {
  name: 'DolarHoje',
  data() {
    return {
      valorDolar: 0,
    }
  },
  template: `<p>Valor dolar/real: {{valorDolar}}</p>`,
  methods: {
    async puxarDolar() {
      const response = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
      const data = await response.json();

      this.valorDolar = data.rates.BRL.toFixed(2);
    }
  },
  created() {
    this.puxarDolar();
  }
}