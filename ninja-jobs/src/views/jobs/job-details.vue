<template>
  <h1>Job Details</h1>
  <p>The Job id is {{ id }}</p>
</template>

<script>
export default {
  props: {
    id: {
      default: null,
    },
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style></style>
