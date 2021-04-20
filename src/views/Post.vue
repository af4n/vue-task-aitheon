<template>
  <div class="post">
    <div class="title">
      <h2>{{post.title}}</h2>
    </div>
    <hr>
    <div class="body">
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'Post',
    computed: mapGetters(['allPosts']),
    methods: mapActions(['fetchPosts']),
    mounted() {
      this.fetchPosts()
    },
    created() {
      const post = this.allPosts.find(post => post.id === this.$route.params.id)
      if (post) {
        this.post = post
      }
    }
  }
</script>

<style scoped lang="scss">
  .post {
		max-width: 800px;
    border: 1px solid #2c3e50;
    border-radius: 5px;
		margin: 100px auto;
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.5);

    .title {

      h2 {
        margin-top: 10px;
        margin-bottom: 10px;
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
</style>
