<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task"/>
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input type="text" v-model="day" name="day" placeholder="Add Day & Time"/>
    </div>
    <div class="box">
      <label>Set Reminder</label>
      <input class="check" type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block">
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert('please add task');
        return;
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.text = '';
      this.day = '';
      this.reminder = false;

      this.$emit('add-task', newTask);
    }
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
  margin-left: 4px;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 3px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.box {
  margin-left: 5px;
}
.check {
  margin-left: 10px;
}
</style>