import { createWebHistory, createRouter } from "vue-router";
import Home from "./Pages/Home";
import Ingredients from './Pages/Ingredients';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },{
    path:'/ingredients',
    name:'ingredients',
    component:Ingredients,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;