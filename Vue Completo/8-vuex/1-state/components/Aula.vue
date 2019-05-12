<template>
  <div class="aula">
    <p>Aula do {{user}}</p>
    <p>Professor: {{nomeMaiusculo}}</p>
    <p>Total: {{aulasCompletas}}/{{totalAulas}}</p>
    <button @click="COMPLETAR_AULA">Finalizar Aula</button>
    <button @click="handleClick">modificar usuario</button>
    <input type="text" v-model="novoUser">
    <p>{{novoUser}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      totalAulas: 25,
      nome: "Eduardo",
      novoUser: null,
    }
  },
  computed: {
      ...mapState(['user','aulasCompletas']),
      nomeMaiusculo() {
        return this.nome.toUpperCase();
      }
    },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
    handleClick() {
      this.CHANGE_USER({
        user: this.novoUser,
        idade: 10,
        totalAulas: this.totalAulas
      });
    },
  }
}
</script>

<style scoped>
  .aula {
    padding: 20px;
    color: #fff;
    background: #438;
  }
</style>
