<template>
  <div class="container">
    <Header title="Task Tracker" ></Header>
    <Button 
      @btn-click="toggleTaskView" :color="taskView ? 'grey' : 'green'" 
      :text="taskView ? 'Close Task View' : 'Task View'"
    ></Button>
    <div v-if="taskView">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks 
      @toggle-reminder="toggleReminder" 
      @delete-task="deleteTask" :tasks="tasks"
    ></Tasks>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    Button,
  },
  data() {
    return {
      tasks: [],
      taskView: false,
      color: 'green',
    }
  },
  methods: {
    toggleTaskView() {
      this.taskView = !this.taskView;
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm("Are you sure you want to delete task!")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
           task.reminder = !task.reminder;
        }
        return task;
      });
    },
    async fetchTasks() {
      const res = await fetch('http://localhost:3000/tasks');
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 700px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
