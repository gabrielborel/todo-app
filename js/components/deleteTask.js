const deleteTask = (e, update, id) => {
   e.path[1].classList.add('deleted-task')

   const index = id
   const tasks = JSON.parse(localStorage.getItem('tasks')) || []

   setTimeout(() => {
      tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      update()
   }, 390)
}
   

export const DeleteButton = (update, id) => {
   const deleteButton = document.createElement('button')
   deleteButton.classList.add('delete-btn')

   deleteButton.addEventListener('click', (e) => deleteTask(e, update, id))

   return deleteButton
}