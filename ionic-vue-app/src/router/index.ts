import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'
import Home from "../views/Home.vue";

const routes = [
  { 
    path:"/", 
    name: "Home", 
    component: Home 
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: () => import("../views/Recipes.vue")
  },
  {
    path: "/recipe-detail/:link",
    name: "RecipeDetail",
    
    component: () => import("../views/RecipeDetail.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router;