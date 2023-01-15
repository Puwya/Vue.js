<template>
  <form>
    <label>Email: </label>
    <input type="email" v-model="email" required />

    <label>Password: </label>
    <input type="password" v-model="password" required />

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills: </label>
    <input type="text" v-model="skill" @keyup="addSkill" />
    <ul>
      <li v-for="(s, i) in skills" :key="i" class="skill" @click="deleteSkill(s)">
        {{ s }}
      </li>
    </ul>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Accept: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      skill: '',
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key !== ',') {
        return;
      }

      this.skill = this.skill.replace(',', '');

      if (!this.skill) {
        return;
      }

      if (!this.skills.includes(this.skill)) {
        this.skills.push(this.skill);
        this.skill = '';
      }
    },
    deleteSkill(skillName) {
      this.skills = this.skills.filter((s) => {
        return s !== skillName;
      });
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0px 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0px 10px 0px 0px;
  position: relative;
  top: 2px;
}

ul {
  display: flex;
  margin: 10px 0px;
  padding: 0px 0px;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  list-style-type: none;
}

.skill {
  padding: 3px 5px;
  border-style: solid;
  border-color: #555;
  border-width: 1px;
  border-radius: 5px;
  cursor: pointer;
}

.skill:hover {
  background-color: #555;
  color: white;
}
</style>
