<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDownload'">Donwload</button>
    <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

    <h1>Exercicios:</h1>
    <p>Crie 3 componentes:</p>
      <ul>
      <li>1: Componente falando sobre a empresa</li>
      <li>2: Componente com os serviços da empresa</li>
      <li>3: Componente com um formulário de contato</li>
      </ul>
      <p>Crie um menu, que ao clique ele mude os componentes
      acima de forma dinâmica. Não destrua o componente</p>
    <Menu/>
  </div>
</template>

<script>
import AulaDescricao from './components/AulaDescricao.vue';
import AulaDownload from './components/AulaDownload.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    AulaDescricao,
    AulaDownload,
    Menu
  },
  data() {
    return {
      componenteAtivo: 'AulaDescricao',
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
</style>
