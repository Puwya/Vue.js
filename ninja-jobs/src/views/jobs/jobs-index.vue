<template>
  <h1>Jobs</h1>
  <ul>
    <li v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
        <h1>{{ job.title }}</h1>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
        { title: 'Ninja UX Developer', id: 2, details: 'lorem' },
        { title: 'Ninja UX Engineer', id: 3, details: 'lorem' },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

a {
  text-decoration: none;
  color: black;
}

.job {
  width: 50%;
  cursor: pointer;
  background-color: lightgray;
  border-radius: 10px;
}

.job:hover {
  opacity: 0.6;
}
</style>
