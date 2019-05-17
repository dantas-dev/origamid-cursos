<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{produto.nome}}</h1>
        <p class="preco">{{produto.preco | numeroPreco}}</p>
        <p class="descricao">{{produto.descricao}}</p>
        <button class="btn" v-if="produto.vendido === 'false'">Comprar</button>
        <button v-else class="btn" disabled>Produto Vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else/>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Produto",
  props: ["id"],
  data() {
    return {
      produto: null
    };
  },
  methods: {
    async getProduto() {
      this.produto = null;
      const response = await api.get(`/produto/${this.id}`);
      const data = await response.data;

      setTimeout(() => {
        this.produto = data;
      }, 1500);
    }
  },
  created() {
    this.getProduto();
  }
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
