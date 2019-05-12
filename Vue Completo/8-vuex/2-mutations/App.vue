<template>
  <div id="app">
    <Aluno/>
    <Curso/>

    {{$store.state.acao}}
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue';
import Curso from '@/components/Curso.vue';

export default {
  name: 'app',
  components: {
    Aluno,
    Curso,
  },
  created() {
    this.$store.dispatch('puxarAcao');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- 
  Crie 3 componentes: Aluno, Curso e Aulas
  Aluno e Curso devem estar em App.vue

  Aulas deve ser um componente filho de Curso

  Aulas terá uma lista:
  {
    nome: "HTML e CSS",
    duracao: 15
  },
  {
    nome: "JavaScript",
    duracao: 30
  },
  {
    nome: "UX Design",
    duracao: 20
  }

  Crie um botão para cada aula, onde será possível
  clicar em completar. As aulas completas deverão
  ser colocadas em uma Array dentro de Store.

  Utilize mutações para modificar a Array.

  A Array de aulas completas deverá ser mostrada no
  componente Aluno
 -->