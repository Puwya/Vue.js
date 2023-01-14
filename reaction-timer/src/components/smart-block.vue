<template>
  <div v-if="showBlock" class="block">click me</div>
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay);
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
