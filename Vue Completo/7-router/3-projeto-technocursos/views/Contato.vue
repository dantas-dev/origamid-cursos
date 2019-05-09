<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api">
        <h1>{{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
        <ul>
          <li v-for="(contato, chave) in api.contato" :key="chave">
            <p>{{chave}}: {{contato}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'contato',
  mixins: [fetchData],
  created() {
    this.fetchData('/contato');
  }
}
</script>
