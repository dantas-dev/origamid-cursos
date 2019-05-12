import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aluno: 'Eduardo',
    aulasCompletas: [],
    acao: {},
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      state.aulasCompletas.push(payload);
    },
    UPDATE_ACAO(state, playload) {
      state.acao = playload;
    }
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload);
    },
    async puxarAcao(context) {
      const response = await fetch('https://api.iextrading.com/1.0/stock/aapl/quote');
      const data = await response.json();

      context.commit('UPDATE_ACAO', data);
      context.dispatch('completarAula', {
        nome: 'Apple'
      })
    }
  }
})
