import { CompleteButton } from './completeTask.js'
import { DeleteButton } from './deleteTask.js'
import { loadTasks } from './loadTasks.js'

export const handleNewTask = (e) => {
   e.preventDefault()

   const tasks = JSON.parse(localStorage.getItem('tasks')) || []

   const input = document.querySelector('[data-form-input]')
   const content = input.value
   if (!content) return

   const done = false

   const data = {
      content,
      done
   }

   const updatedTasks = [...tasks, data]
   localStorage.setItem('tasks', JSON.stringify(updatedTasks))

   loadTasks()

   input.value = ''
}

export const Task = (content, done, id) => {
   const task = document.createElement('li')
   task.classList.add('list-item')
   if (done) task.classList.add('list-item-done')

   const taskContent = document.createElement('p')
   taskContent.classList.add('content')
   taskContent.innerHTML = content

   task.appendChild(CompleteButton(loadTasks, id))
   task.appendChild(taskContent)
   task.appendChild(DeleteButton(loadTasks, id))

   return task
}