export const showLeftItems = (tasks) => {
   const activeTasks = tasks.filter((task) => !task.done)
   document.querySelector('[data-left]').innerHTML = `${activeTasks.length} items left`
}