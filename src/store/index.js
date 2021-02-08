import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts({commit}) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      commit('getPosts', posts)
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  },
  modules: {
  }
})
