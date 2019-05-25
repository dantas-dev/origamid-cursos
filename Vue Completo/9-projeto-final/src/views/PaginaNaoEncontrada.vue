<template>
  <div>
    <h1>Página não encontrada.</h1>
    <router-link class="home" to="/">Voltar para Home</router-link>
  </div>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada"
};
</script>

<style scoped>
h1 {
  margin: 20px auto;
  text-align: center;
}

.home {
  display: block;
  text-align: center;
}
</style>
