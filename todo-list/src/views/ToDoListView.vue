<script lang="ts">
import TaskInput from '@/components/TaskInput.vue'
import TaskItem from '@/components/TaskItem.vue'
import type Task from '@/types/task'
import { ref } from 'vue'
import { addTask as _addTask, removeTask as _removeTask, getTasks } from '@/services/task'

export default {
  name: 'To-Do List',
  components: {
    TaskInput,
    TaskItem,
  },
  setup() {
    const all_tasks = ref<Task[]>(getTasks())

    // const all_tasks = ref<Task[]>([
    //   { id: 1, title: 'rrr', description: 'ttt' },
    //   { id: 2, title: 'rrr', description: 'ttt' },
    // ])

    const addTask = (title: string, description: string) => {
      all_tasks.value.push({
        id: title.length + description.length,
        title: title,
        description: description,
      })
      _addTask(title, description)
    }

    const removeTask = (id: number) => {
      all_tasks.value = all_tasks.value.filter((task) => task.id !== id)
      _removeTask(id)
    }

    return {
      all_tasks,
      addTask,
      removeTask,
    }
  },
}
</script>

<template>
  <main>
    <div class="to-do-list">
      <TaskInput @addTask="addTask"></TaskInput>
      <ul>
        <li v-for="task in all_tasks" :key="task.id">
          <TaskItem :task="task" @removeTask="removeTask(task.id)" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="css" scoped>
.to-do-list {
  border-radius: 10px;
  border: 3px solid black;
  background-color: aqua;
  padding: 5px;
  /* display: flex; */
  /* place-items: center; */
  /* display: flex; */
  /* align-items: center; */
}
ul {
  padding: 5px;
  list-style-type: none;
}
</style>
