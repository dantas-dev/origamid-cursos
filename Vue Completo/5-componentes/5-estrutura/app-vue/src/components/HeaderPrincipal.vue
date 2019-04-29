<template>
<div>
  <h1>{{mensagem}}</h1>
  <nav>
    <ul>
      <li>Home</li>
      <li>Sobre</li>
      <li>Contato</li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'HeaderPrincipal',
  data() {
    return {
      mensagem: 'Titulo Header'
    }
  }
}
</script>

<style>

</style>
