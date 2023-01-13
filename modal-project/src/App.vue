<template>
  <h1>HELLO FROM IMPROVED LOS</h1>
  <div v-if="modalActive">
    <smart-modal theme="event" @closeModal="toggleModal">
      <template v-slot:content>
        <p>This is the test modal</p>
        <p>hello from the test modal</p>
      </template>
      <template v-slot:links>
        <a href="#">Signup</a>
        <a href="#">More Details</a>
      </template>
    </smart-modal>
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import smartModal from '@/components/smart-modal.vue';

export default {
  name: 'App',
  components: {
    smartModal,
  },
  data() {
    return {
      modalActive: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
  },
};
</script>

<style scoped></style>
