import { loadTheme, switchTheme } from './components/themeSwitcher.js';
import { handleNewTask } from './components/createTask.js';
import { loadTasks } from './components/loadTasks.js';
import { clearCompletedTasks } from './components/clearCompletedTask.js';
import { filterTasks, loadLast } from './components/filters.js';

const themeSwitcherButton = document.querySelector('[data-themeSwitcher-btn]')
themeSwitcherButton.addEventListener('click', switchTheme)

const createTaskButton = document.querySelector('[data-create-button]')
createTaskButton.addEventListener('click', handleNewTask)

const clearCompletedTaskButton = document.querySelector('[data-clear-completed]')
clearCompletedTaskButton.addEventListener('click', clearCompletedTasks)

filterTasks()
loadTheme()
loadTasks()
loadLast()