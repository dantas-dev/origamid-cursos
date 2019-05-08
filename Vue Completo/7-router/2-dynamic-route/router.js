import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
const Cursos = () => import('./views/Cursos.vue');
const Curso = () => import(/* webpackChunkName: "curso" */'./views/Curso.vue');
const CursoAulas = () => import(/* webpackChunkName: "curso" */'./views/CursoAulas.vue');
const CursoDescricao = () => import(/* webpackChunkName: "curso" */'./views/CursoDescricao.vue');
import Acoes from "./views/Acoes.vue";
import AcoesDados from "./views/AcoesDados.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        sidebar: Acoes
      }
    },
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/acoes",
      components: {
        default: Acoes,
        sidebar: Home,
      },
      children: [
        {
          path: ":simbolo",
          component: AcoesDados,
          props: true,
        },
      ],
    },
    {
      path: "/cursos",
      component: Cursos,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log('foi para crusos');
        next();
      },
      children: [
        {
          name: 'curso',
          path: ":curso",
          component: Curso,
          props: true,
          children: [
            {
              name: 'aulas',
              path: 'aulas',
              component: CursoAulas,
            },
            {
              name: 'descricao',
              path: 'descricao',
              component: CursoDescricao,
            }
        ],
        }
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})