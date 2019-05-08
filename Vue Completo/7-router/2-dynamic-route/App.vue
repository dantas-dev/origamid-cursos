<template>
  <div id="app">
    <h1 @click="mostrarRouter">App.vue</h1>
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/cursos">cursos</router-link>
      <router-link to="/acoes">acoes</router-link>
    </nav>
      <router-view></router-view>
      <router-view name="sidebar"></router-view>
    <!-- <transition mode="out-in">
    </transition> -->
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
  color: #236;
  border: 4px solid;
  margin: 20px;
  padding: 20px;
}

nav {
  padding: 20px 0;
  /* margin-top: 2000px; */
}

a {
  color: #234;
  padding: 10px;
  margin: 0 5px;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px,0,0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>
