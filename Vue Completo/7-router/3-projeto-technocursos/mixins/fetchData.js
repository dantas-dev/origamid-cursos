export default {
  data() {
    return {
      api: null,
      loading: true,
    }
  },
  methods: {
    async fetchData(url) {
      this.loading = true;
      this.api = null;
      const response = await fetch(`http://localhost:3000${url}`);
      const data = await response.json();

      // fingindo demora da API
      setTimeout(() => {
        this.api = data;
        this.loading = false;
      }, 1000);
    }
  }
}