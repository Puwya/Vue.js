<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="theme">
      <div>
        <slot name="content"></slot>
      </div>
      <div>
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 400px;
  height: 300px;
  margin: auto auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sale {
  background-color: lightblue;
}

.event {
  background-color: black;
  color: white;
}

.event a {
  color: white;
}
</style>
