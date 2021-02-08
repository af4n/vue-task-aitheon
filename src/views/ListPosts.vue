<template>
  <div class="list-posts">
    <div class="post"
         v-for="post in allPosts"
         :key="post.id"
    >
      <div class="title">
        <router-link tag="h2"
                     :to="{name: 'Post', params: {id: post.id}}"
                     :post="post"
        >{{post.title}}</router-link>
      </div>
      <hr>
      <div class="body">
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'ListPosts',
  props: {
    post: {
      type: Object
    }
  },
  components: {},
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  mounted() {
    this.fetchPosts()
  }
}
</script>


<style lang="scss">
  .list-posts {
    margin: 100px auto;
    max-width: 800px;
    .post {
      border: 1px solid #2c3e50;
      border-radius: 5px;
      margin-bottom: 10px;
      box-shadow: 1px 1px 6px 1px rgba(0,0,0,0.5);
      padding-left: 15px;
      padding-right: 15px;

      .title {
        h2 {
          margin-top: 10px;
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
      hr {
        border-top-width: 0px;
      }
      .body {
        p {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }


  @media only screen and (max-width: 768px) {
    .list-posts {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 600px) {
    .list-posts {
      max-width: 300px;
    }
  }
</style>