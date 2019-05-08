<template>
  <div>
    <h1>{{curso}}</h1>
    <router-link :to="{name: 'descricao'}">Descricao</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <transition mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['curso'],
  methods: {
    puxarDados() {
      console.log('puxei api');
    }
  },
  beforeRouteEnter(to, from, next) {
    // this.puxarDados();
    next((vm) => {
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados();
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm('voce deseja sair?');
    if(confirmar) {
      next();
    } else {
      console.log('nao saia');
    }
  }
}
</script>

<style>

</style>
