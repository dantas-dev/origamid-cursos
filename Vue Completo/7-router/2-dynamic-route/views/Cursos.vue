<template>
  <div>
    <h1>Essa e a pagina cursos</h1>
    <p>Curso ativo: {{curso}}</p>
    <nav>
      <router-link :to="{ name: 'curso', params: { curso: 'javascript' }}">javascript</router-link>
      <router-link to="/cursos/html">html</router-link>
      <router-link to="/cursos/css">css</router-link>
    </nav>
    <transition name="topDown" mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['curso'],
}
</script>

<style>
.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, -40px, 0) scale(.2);
  opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active {
  transition: all .3s;
}
</style>
