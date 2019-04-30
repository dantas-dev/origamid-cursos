<template>
  <div id="app">
    <ModalPrincipal>
      <template #header="{logo}">
        <h2>{{logo}}</h2>
      </template>
      <template #default="{user}">
        <button>clique</button>
        <p>Conteudo default do {{user.nome}}</p>
      </template>
      <template #footer>
        <p>Conteudo do footer</p>
      </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue'

export default {
  name: 'app',
  components: {
    ModalPrincipal
  }
}

</script>

<style>

</style>
