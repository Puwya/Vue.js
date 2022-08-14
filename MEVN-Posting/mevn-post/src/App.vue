<template>
  <div class="container mt-4">
    <div class="d-flex row-3 justify-content-center">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <Post />
  </div>
</template>

<script>
import Post from './components/Post.vue';

export default {
  name: 'App',
  components: {
    Post,
  },
};
</script>
