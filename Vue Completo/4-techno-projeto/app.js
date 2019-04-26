const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    carrinhoAtivo: false,
    mensagemAlerta: 'Item Adicionado',
    alertaAtivo: false,
  },
  filters: {
    numeroParaPreco(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if(this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
    }
  },
  methods: {
    async fetchProdutos() {
      const r = await fetch('./api/produtos.json');
      const data = await r.json();

      this.produtos = data;
    },
    async fetchProduto(id) {
      const r = await fetch(`./api/produtos/${id}/dados.json`);
      const data = await r.json();
      this.produto = data;
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    fecharModal({target, currentTarget}) {
      if(target === currentTarget) {
        this.produto = false;
      }
    },
    clickForaCarrinho({target, currentTarget}) {
      if(target === currentTarget) {
        this.carrinhoAtivo = false;
      }
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({id, nome, preco});
      this.alerta(`${nome} adicionado ao carrinho.`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if(localStorage.carrinho) {
        this.carrinho = JSON.parse(localStorage.carrinho);
      }
    },
    comprararEstoque() {
      const items = this.carrinho.filter(({id}) => id === this.produto.id);
      this.produto.estoque -= items.length;
    },
    alerta(msg) {
      this.mensagemAlerta = msg;
      this.alertaAtivo = true;

      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    router() {
      const hash = document.location.hash;
      if(hash) {
        this.fetchProduto(hash.replace('#', ''));
      }
    }
  },
  watch: {
    carrinho() {
      localStorage.carrinho = JSON.stringify(this.carrinho);
    },
    produto() {
      document.title = this.produto.nome || 'Techno';
      const hash = this.produto.nome || '';
      history.pushState(null, null, `#${hash}`);
      if(this.produto) this.comprararEstoque();
    }
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
    this.router();
  }
});