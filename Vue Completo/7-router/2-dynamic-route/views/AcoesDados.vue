<template>
  <div>
    <div v-if="loading"> 
      Loading...
    </div>
    <div v-else>
      <p>{{simbolo}}</p>
      <div>{{acao}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      loading: true,
      acao: null,
    }
  },
  methods: {
    async puxarAcao() {
      this.loading = true;
      this.acao = null;
      const response = await fetch(`https://api.iextrading.com/1.0/stock/${this.simbolo}/quote`);
      const data = await response.json();

      this.acao = data;
      this.loading = false;
    }
  },
  created() {
    this.puxarAcao();
  },
  watch: {
    $route: 'puxarAcao',
  }
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to.params);
  //   this.puxarAcao(to.params.simbolo);
  //   next();
  // }
}
</script>

<style>

</style>
