<template>
  <div>
    <h1>Board</h1>
    <hr>
    <div v-for="i in 3" :key="i">
        <button v-for="j in 3" :key="j" value = "X">
          {{ board[i - 1][j - 1] }}
        </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
  },
  data() {
    return {
      board: [
          ['','',''],
          ['','',''],
          ['','','']
      ]
    }
  }
};
</script>

<style>
</style>