<template>
  <div>
    <h1>Board</h1>
    <div v-for="i in 3" :key="i">
        <button v-for="j in 3" :key="j">
          {{i}}, {{j}}
        </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.i,this.j,this.board);
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