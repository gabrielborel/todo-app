import { loadTasks } from './loadTasks.js'

export const clearCompletedTasks = () => {
   const tasks = JSON.parse(localStorage.getItem('tasks')) || []

   for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].done) {
         tasks.splice(i, 1)
         i--
      }
   } 

   localStorage.setItem('tasks', JSON.stringify(tasks))

   loadTasks()
}

const clearCompletedTaskButton = document.querySelector('[data-clear-completed]')
clearCompletedTaskButton.addEventListener('click', clearCompletedTasks)