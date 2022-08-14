<template>
  <div class="container mt-4">
    <div class="d-flex row-3 justify-content-center">
      <video
        autoplay
        loop
        muted
        alt="Vue logo"
        src="./assets/Logo.mp4"
        width="320"
        height="240"
      />
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
