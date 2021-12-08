import { loadTasks } from './loadTasks.js'

export const filterTasks = () => {
   const buttons = document.querySelectorAll('.btn')
   buttons.forEach((button) => button.addEventListener('click', (e) => Filter(e)))
}

const Filter = (e) => {
   const key = e.target ? e.target.innerHTML : e
   switch (key) {
      case 'All':
         showAllTasks(key)
         break;

      case 'Active':
         showActiveTasks(key)
         break;

      case 'Completed':
         showCompletedTasks(key)
         break;
   }
}

const clear = () => {
   const buttons = document.querySelectorAll('.btn')
   buttons.forEach((button) => button.classList.remove('btn-selected'))
}

export const loadLast = () => {
   const last = JSON.parse(localStorage.getItem('filter')) || 'All'
   Filter(last)
}

function showAllTasks(key) {
   clear()
   document.querySelectorAll('[data-all]').forEach((btn) => btn.classList.add('btn-selected'))
   localStorage.setItem('filter', JSON.stringify(key))
   loadTasks()
}

function showActiveTasks(key) {
   clear()
   document.querySelectorAll('[data-active]').forEach((btn) => btn.classList.add('btn-selected'))
   localStorage.setItem('filter', JSON.stringify(key))
   loadTasks()
   document
      .querySelectorAll('.list-item')
      .forEach((item) => {
         if (item.classList.contains('list-item-done')) {
            item.style.display = 'none'
         }
      })
}

function showCompletedTasks(key) {
   clear()
   document.querySelectorAll('[data-completed]').forEach((btn) => btn.classList.add('btn-selected'))
   localStorage.setItem('filter', JSON.stringify(key))
   loadTasks()
   document
      .querySelectorAll('.list-item')
      .forEach((item) => {
         if (!item.classList.contains('list-item-done')) {
            item.style.display = 'none'
         }
      })
}

filterTasks()
loadLast()