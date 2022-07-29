<template>
  <div align="center">
    <button @click="handleClick" class="btn-v" :style="{ background: color }"> {{ text }} </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    handleClick() {
      this.$emit('btn-click');
    }
  }
}
</script>

<style scoped>
.btn-v {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 7px 15px;
  margin: 7px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>