<template>
  <div>
    <p>Reaction Time: {{ reactionTime }} ms</p>
  </div>
</template>

<script>
export default {
  props: {
    reactionTime: {
      default: null,
    },
  },
};
</script>

<style></style>
