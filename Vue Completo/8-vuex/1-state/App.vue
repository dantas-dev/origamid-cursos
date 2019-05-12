<template>
  <div id="app">
    {{$store.state.user}}
    <User/>
    <Curso/>
  </div>
</template>

<script>
import User from "@/components/User.vue";
import Curso from "@/components/Curso.vue";

export default {
  name: 'app',
  components: {
    User,
    Curso,
  }
}
</script>

<style>
  #app {
    background: #4b8;
    padding: 10px;
    color: #111;
  }
</style>
