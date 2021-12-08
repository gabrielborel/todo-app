const completeTask = (e, update, id) => {
   e.target.parentElement.classList.toggle('list-item-done')

   const tasks = JSON.parse(localStorage.getItem('tasks')) || []
   tasks[id].done = !tasks[id].done
   localStorage.setItem('tasks', JSON.stringify(tasks))

   update()
}

export const CompleteButton = (update, id) => {
   const completeButton = document.createElement('button')
   completeButton.classList.add('complete-btn')

   const checkIcon = document.createElement('span')
   checkIcon.classList.add('complete-btn-check')
   completeButton.appendChild(checkIcon)

   completeButton.addEventListener('click', (e) => completeTask(e, update, id))

   return completeButton
}