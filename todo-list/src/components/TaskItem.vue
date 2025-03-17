<script lang="ts">
import type Task from '@/types/task'

export default {
  props: {
    task: {
      type: Object as () => Task,
      required: true,
    },
  },
  setup(props, { emit }) {
    const removeTask = () => {
      emit('removeTask')
    }
    return { removeTask }
  },
}
</script>

<template>
  <div class="task">
    id: {{ task.id }}
    <div class="task-info">
      <h5>{{ task.title }}</h5>
      <p>{{ task.description }}</p>
    </div>
    <div>
      <button @click="removeTask">Удалить</button>
    </div>
  </div>
</template>

<style scoped>
.task {
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

button {
  border-radius: 5px;
  /* padding: 2px; */
}
</style>
