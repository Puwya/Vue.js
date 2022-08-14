<template>
  <div>
    <p v-for="post in posts" :key="post._id">
      {{ post.name }}
    </p>
    <button class="btn btn-primary"></button>
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
