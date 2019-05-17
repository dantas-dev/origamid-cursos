<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div class="produto" v-for="(produto, index) in produtos" :key="index">
          <router-link :to="{ name: 'produto', params: { id: produto.id } }">
            <img v-if="produtos.fotos" :src="produto.fotos[0]" :alt="produto.fotos[0].titulo">
            <p class="preco">{{produto.preco | numeroPreco}}</p>
            <h2 class="titulo">{{produto.nome}}</h2>
            <p>{{produto.descricao}}</p>
          </router-link>
        </div>
        <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/>
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultado">
        <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p>
      </div>
      <PaginaCarregando v-else key="carregando"/>
    </transition>
  </section>
</template>

<script>
import ProdutosPaginar from "@/components/ProdutosPaginar.vue";
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ProdutosLista",
  components: {
    ProdutosPaginar
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      return `/produto/?_limit=${this.produtosPorPagina}${query}`;
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  methods: {
    async getProdutos() {
      this.produtos = null;
      const response = await api.get(this.url);
      const data = await response.data;
      setTimeout(() => {
        this.produtosTotal = +response.headers["x-total-count"];
        this.produtos = data;
      }, 1500);
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border: 1px solid #eceef1;
  border-radius: 4px;
  transition: all 0.3s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
