<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">{{pagina}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },
    produtosTotal: {
      type: Number,
      default: 1
    }
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    }
  },
  computed: {
    paginas() {
      const currentPage = Number(this.$route.query._page);
      const rangePages = 9;
      const offsetPage = Math.ceil(rangePages / 2);
      const totalPages = this.paginasTotal;

      const pagesArray = [];

      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, currentPage - offsetPage);
      pagesArray.splice(rangePages, totalPages);

      return pagesArray;
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    }
  }
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
