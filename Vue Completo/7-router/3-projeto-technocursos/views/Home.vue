<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition mode="in-out">
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p> 
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome+avaliacao.descricao">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
          <img src="@/assets/aprender.png" alt="Aprenda Web Design">
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  }
}
</script>
<style>
  .btn-cursos {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    border: none;
    background: #4b8;
    border-radius: 4px;
    color: #fff;
    padding: 15px 40px;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 2px rgba(0,0,0, .1);
  }
</style>
