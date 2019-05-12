<template>
  <p>Usuario:  <strong>{{user}}</strong></p>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style>

</style>
