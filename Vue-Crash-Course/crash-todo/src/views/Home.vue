<template>
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
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  components: {
    AddTask,
    Button,
    Tasks,
  },
  data() {
    return {
      tasks: [],
      taskView: false,
    }
  },
  methods: {
    toggleTaskView() {
      this.taskView = !this.taskView;
    },
    async addTask(task) {
      const res = await fetch('https://task-tracker-los.herokuapp.com/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm("Are you sure you want to delete task!")) {
        const res = await fetch(`https://task-tracker-los.herokuapp.com/tasks/${id}`, { method: 'DELETE' });

        if (res.status === 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          alert('error deleting task');
        }
      }
    },
    async toggleReminder(id) {
      const task = await this.fetchTask(id);
      task.reminder = !task.reminder;

      const res = await fetch(`https://task-tracker-los.herokuapp.com/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();

      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
           task.reminder = data.reminder;
        }
        return task;
      });
    },
    async fetchTasks() {
      const res = await fetch('https://task-tracker-los.herokuapp.com/tasks');
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`https://task-tracker-los.herokuapp.com/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>