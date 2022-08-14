<template>
  <div>
    <p v-for="post in posts" :key="post._id">
      {{ post.post_name }}
    </p>
  </div>
</template>

<script>
import Router from '../Router.js';

export default {
  name: 'Post-C',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.posts = await Router.GetPost();
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
