<template>
  <div>
    <p>Reaction Time: {{ reactionTime }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: {
    reactionTime: {
      default: null,
    },
  },
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.reactionTime < 250) {
      this.rank = 'Ninja Fingers';
      return;
    }

    if (this.reactionTime < 400) {
      this.rank = 'Rapid Reflexes';
      return;
    }

    this.rank = 'Snail Pace...';
  },
};
</script>

<style scoped>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
