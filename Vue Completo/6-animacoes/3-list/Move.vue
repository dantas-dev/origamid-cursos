<template>
  <div>
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>

    <transition-group name="fade" tag="ul">
      <li v-for="filme in filmes" :key="filme">{{filme}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [
        "O Senhor dos Aneis",
        "As Crônicas de Nárnia",
        "Coração Valente",
        "Harry Potter"
      ]
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
.fade-move {
  transition: transform 1s;
}

li {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
