import { createWebHistory, createRouter } from "vue-router";



import index from '../petProjects/index.vue'
import calculator from '../petProjects/calculator.vue';
import tictactoe from '../petProjects/tictactoe.vue'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },

  {
    path: "/",
    name: "index",
    component: index
  },

  {
    path: "/Calculator",
    name: "Calculator",
    component: calculator
  },

  {
    path: "/tictactoe",
    name: "tictactoe",
    component: tictactoe
  },
]



});

export default routes;


























