<template>
  <h1 @click="navegarCursos">Essa é a home</h1>
</template>

<script>
export default {
  methods: {
    navegarCursos() {
      setTimeout(() => {
        this.$router.push('cursos');
      }, 2000);
    }
  }
};
</script>

<style>
</style>
