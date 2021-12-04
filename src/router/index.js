import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHomepage from '@/views/TheHomepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHomepage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
