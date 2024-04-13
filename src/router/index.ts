import { createWebHistory, createRouter } from "vue-router";
import index from '../petProjects/index.vue'
import calculator from '../petProjects/calculator.vue';
import tictactoe from '../petProjects/tictactoe.vue'
import galleryViewer from "../petProjects/galleryViewer.vue";
import nasaObserver from "../petProjects/nasaObserver.vue";
import contactBook from "../petProjects/contactBook.vue";
import rxjsPractice from "../petProjects/rxjsPractice.vue";
import login from "../petProjects/login.vue";
import memoryGame from "../petProjects/memoryGame.vue";


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
    component: index,
    children: [
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

      {
        path: "/galleryViewer",
        name: "galleryViewer",
        component: galleryViewer
      },

      {
        path: "/nasaObserver",
        name: "nasaObserver",
        component: nasaObserver
      },

      {
        path: "/contactBook",
        name: "contactBook",
        component: contactBook
      },

      {
        path: "/rxjsPractice",
        name: "rxjsPractice",
        component: rxjsPractice
      },

      {
        path: "/login",
        name: "login",
        component: login
      },

      {
        path: "/memoryGame",
        name: "memoryGame",
        component: memoryGame
      },



      
    ]
  },





  
]
});

export default routes;


























