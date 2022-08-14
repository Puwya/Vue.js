<template>
  <form class="container border border-3 border-dark mt-2" @submit="HandleSubmit">
    <div class="row-3">
      <label for="name" class="form-label">Post Name</label>
      <input
        type="text"
        class="form-control rounded-pill"
        id="PostName"
        v-model="PostName"
      />
    </div>
    <div class="row-3">
      <label for="author" class="form-label">Author Name</label>
      <input
        type="text"
        class="form-control rounded-pill"
        id="AuthorName"
        v-model="Author"
      />
    </div>
    <button class="btn btn-primary w-100 mt-2 mb-2 rounded-pill" type="submit">
      Add Post
    </button>
  </form>
</template>

<script>
import Router from '../Router';

export default {
  name: 'Add-Post',
  data() {
    return {
      Author: '',
      PostName: '',
    };
  },
  methods: {
    async HandleSubmit() {
      console.log(1, this.PostName, this.Author);
      await Router.CreatePost({
        name: this.PostName,
        author: this.Author,
      });
    },
  },
};
</script>
