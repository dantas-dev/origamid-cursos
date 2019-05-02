<template>
  <div>
    <button @click="isActive = 'Servicos'">Servicos</button>
    <button @click="isActive = 'Contato'">Contato</button>
    <transition mode="out-in">
      <component :is="isActive"></component>
    </transition>
  </div>
</template>

<script>
import Servicos from './Servicos.vue';
import Contato from './Contato.vue';
export default {
  data() {
    return {
      isActive: 'Servicos',
    }
  },
  components: {
    Servicos,
    Contato
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, +50px, 0);
}
</style>
