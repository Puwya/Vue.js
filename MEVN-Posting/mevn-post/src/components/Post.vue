<template>
  <div class="containter mt-2">
    <div class="d-flex justify-content-between row-3">
      <p class="m-1 ps-2 text-uppercase fw-bold">Post Name</p>
      <p class="m-1 pe-2 text-uppercase fw-bold">Author</p>
      <p class="m-1 pe-1 text-uppercase fw-bold">Delete</p>
    </div>
    <div
      class="d-flex row-3 mb-1 ps-1 border border-success border-opacity-50 rounded-pill border-2"
      v-for="post in posts"
      :key="post._id"
    >
      <div class="d-flex justify-content-between w-100 align-items-center">
        <p class="m-0 ps-2">
          {{ post.name }}
        </p>
        <p class="m-0">
          {{ post.author }}
        </p>
        <button class="btn btn-secondary btn-sm rounded-pill">Delete</button>
      </div>
    </div>
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
