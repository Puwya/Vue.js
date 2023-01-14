<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <smart-block v-if="isPlaying" :delay="delay" @finished="reset" />
  <smart-results v-if="showResults" :reactionTime="score" />
</template>

<script>
import SmartBlock from '@/components/smart-block.vue';
import SmartResults from '@/components/smart-results.vue';

export default {
  components: {
    SmartBlock,
    SmartResults,
  },
  data() {
    return {
      delay: null,
      score: null,
      isPlaying: false,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    reset(time) {
      this.isPlaying = false;
      this.showResults = true;
      this.score = time;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
