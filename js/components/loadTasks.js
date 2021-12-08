import { Task } from './createTask.js'
import { showLeftItems } from './showItemsLeft.js'

const list = document.querySelector('[data-list]')

export const loadTasks = () => {
   list.innerHTML = ''

   const updatedTasks = JSON.parse(localStorage.getItem('tasks')) || []
   
   showLeftItems(updatedTasks)

   updatedTasks.forEach((task, id) =>
      list.appendChild(Task(task.content, task.done, id)))
}