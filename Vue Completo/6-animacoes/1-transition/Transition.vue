<template>
  <div>
    <!-- <button @click="ativo = !ativo">transition</button> -->
    <transition 
    appear
    name="fade"
    enter-active-class="animar"
    leave-active-class="animar"
    @enter="enter"
    @leave="leave"
    >
      <!-- <h1 v-if="ativo">Serviçoes</h1> -->
      <h2>Hello Vue</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false,
    }
  },
  methods: {
    enter(elemento) {
      elemento.innerText = elemento.innerText.toUpperCase();
      console.log(elemento, 'apareceu');
    },
    leave(elemento) {
      elemento.style.backgroundColor = 'red';
      console.log(elemento, 'sumiu');
    }
  }
}
</script>

<style>
  h1 {
    background: tomato;
    padding: 40px;
    color: white;
  }
  /* .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  } */

  .animar {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  
</style>
