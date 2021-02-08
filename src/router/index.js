import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPosts from '../views/ListPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListPosts',
    component: ListPosts
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
