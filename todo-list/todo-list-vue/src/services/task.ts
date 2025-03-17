import type Task from '@/types/task'

const TASKS_KEY = 'tasks'

export const getTasks = (): Task[] => {
  const tasks = localStorage.getItem(TASKS_KEY)
  if (tasks) {
    return JSON.parse(tasks)
  }
  return []
}

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
}

export const removeTask = (id: number) => {
  let tasks = getTasks()
  tasks = tasks.filter((task) => task.id !== id)
  saveTasks(tasks)
}

export const addTask = (title: string, description: string) => {
  const tasks = getTasks()
  tasks.push({
    id: title.length + description.length,
    // id: Math.random(),
    title: title,
    description: description,
  })
  saveTasks(tasks)
}
