export default {
  name: 'TempoHoje',
  data() {
    return {
      temperaturaMaxima: 0,
    }
  },
  template: `<p>Rio de Janeiro máxima de: {{temperaturaMaxima}}</p>`,
  methods: {
    async puxarTempo() {
      const response = await fetch('https://www.metaweather.com/api/location/455825/');
      const data = await response.json();

      this.temperaturaMaxima = data.consolidated_weather[0].max_temp.toFixed(0);
    }
  },
  created() {
    this.puxarTempo();
  }
}