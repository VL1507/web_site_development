<script lang="ts">
import { ref } from 'vue'

export default {
  emits: {
    addTask(title: string, description: string) {
      if (title === '' || description === '') {
        alert('Надо заполнить все поля')
        return false
      }
      return true
    },
  },
  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')
    const addTask = () => {
      emit('addTask', title.value, description.value)
    }
    return {
      title,
      description,
      addTask,
    }
  },
}
</script>
<template>
  <div class="task-input">
    <input type="text" placeholder="Название" v-model="title" />
    <input type="textarea" placeholder="Описание" v-model="description" />
    <!-- <textarea placeholder="Описание" v-model="description" /> -->
    <button @click="addTask">Добавить</button>
  </div>
</template>
<style lang="css">
.task-input {
  border-radius: 10px;
  border: 2px solid black;
  background-color: rgb(137, 244, 215);
  padding: 5px;
  /* display: flex; */
  /* place-items: center; */
  display: flex;
  /*align-items: center; */
  align-items: center;
  justify-content: space-between;
}
button input {
  border-radius: 5px;
  /* padding: 2px; */
}
</style>
