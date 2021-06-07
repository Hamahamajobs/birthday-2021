import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hint from "../views/Hint.vue";
import Help from "../views/Help.vue";
import Item from "../views/Item.vue";
import apple from "../views/side/apple.vue";
import side2 from "../views/side/side2.vue";
import firefly from "../views/side/firefly.vue";
import sunset from "../views/side/sunset.vue";
import ship from "../views/side/ship.vue";
import side6 from "../views/side/side6.vue";
import side7 from "../views/side/side7.vue";
import side8 from "../views/side/side8.vue";
import side9 from "../views/side/side9.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hint",
    name: "Hint",
    component: Hint,
  },
  {
    path: "/item",
    name: "Item",
    component: Item,
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
  },
  {
    path: "/apple",
    name: "apple",
    component: apple,
  },
  {
    path: "/side2",
    name: "side2",
    component: side2,
  },
  {
    path: "/firefly",
    name: "firefly",
    component: firefly,
  },
  {
    path: "/sunset",
    name: "sunset",
    component: sunset,
  },
  {
    path: "/ship",
    name: "ship",
    component: ship,
  },
  {
    path: "/side6",
    name: "side6",
    component: side6,
  },
  {
    path: "/side7",
    name: "side7",
    component: side7,
  },
  {
    path: "/side8",
    name: "side8",
    component: side8,
  },
  {
    path: "/side9",
    name: "side9",
    component: side9,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
