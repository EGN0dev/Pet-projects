import { createWebHistory, createRouter } from "vue-router";
import index from '../petProjects/index.vue'
import calculator from '../petProjects/calculator.vue';
import tictactoe from '../petProjects/tictactoe.vue'
import galleryViewer from "../petProjects/galleryViewer.vue";
import nasaObserver from "../petProjects/nasaObserver.vue";


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



      
    ]
  },





  
]
});

export default routes;


























