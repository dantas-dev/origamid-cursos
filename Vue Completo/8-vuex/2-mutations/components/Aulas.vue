<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{aula.nome}} - {{aula.duracao}} minutos</p>
        <button @click="completarAula(aula)">Competar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Aulas',
  data() {
    return {
      aulas: [
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
      ]
    }
  },
  methods: {
    ...mapActions(['completarAula']),
  }
}
</script>

<style>

</style>
