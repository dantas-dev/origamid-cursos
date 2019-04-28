export default {
  name: 'BotaoContador',
  data() {
    return {
      total: 0,
    }
  },
  template: `<button @click="total++">Contador: {{total}}</button>`,
}