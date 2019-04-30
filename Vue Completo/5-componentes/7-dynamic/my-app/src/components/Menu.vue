<template>
  <nav>
    <ul>
      <li><a href="#" @click.prevent="componentActive = 'Sobre'">Sobre</a></li>
      <li><a href="#" @click.prevent="componentActive = 'Servicos'">Serviços</a></li>
      <li><a href="#" @click.prevent="componentActive = 'Formulario'">Formulário</a></li>
    </ul>
    <keep-alive>
      <component :is="componentActive"></component>
    </keep-alive>
  </nav>
</template>

<script>
import Sobre from './Sobre.vue';
import Servicos from './Servicos.vue';
import Formulario from './Formulario.vue';

export default {
  name: 'Menu',
  data() {
    return {
      componentActive: 'Sobre',
    }
  },
  components: {
    Sobre,
    Servicos,
    Formulario,
  }
}
</script>

<style>

</style>
