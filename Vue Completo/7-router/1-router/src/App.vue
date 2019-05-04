<template>
  <div id="app">
    <h1 @click="mostrarRouter">App.vue</h1>
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/cursos">cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  padding: 10px;
  margin: 0 5px;
}

.router-link-exact-active {
  color: tomato;
}
</style>
