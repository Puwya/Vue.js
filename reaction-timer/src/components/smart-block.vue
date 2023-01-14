<template>
  <div v-if="showBlock" @click="stopTimer" class="block">click me</div>
</template>

<script>
export default {
  props: {
    delay: {
      default: 2000,
    },
  },
  data() {
    return {
      showBlock: false,
      interval: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.interval);
      this.$emit('finished', this.reactionTime);
    },
  },
};
</script>

<style scoped>
.block {
  width: 500px;
  height: 250px;
  background: moccasin;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>
