<template>
  <div>
    <p>Aluno: {{aluno}}</p>
    <p>Aulas Completas:</p>
    <p v-for="aula in aulasCompletas" :key="aula.nome">
      {{aula.nome}}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Aluno',
  computed: {
    ...mapState(['aluno', 'aulasCompletas']),
  }
}
</script>

<style>

</style>
