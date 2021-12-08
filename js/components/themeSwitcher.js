const body = document.querySelector('[data-body]')

const switchTheme = () => {
   body.classList.toggle('dark-mode')

   const themeSwitcherIcon = document.querySelector('[data-themeSwitcher-icon]')
   let darkMode = JSON.parse(localStorage.getItem('theme')) || false

   if (body.classList.contains('dark-mode')) {
      body.style.transition = 'transition: all .5s ease;'
      themeSwitcherIcon.src = '/images/icon-sun.svg'
      darkMode = true
      localStorage.setItem('theme', JSON.stringify(darkMode))
   } else {
      body.style.transition = 'transition: all .5s ease;'
      themeSwitcherIcon.src = '/images/icon-moon.svg'
      darkMode = false
      localStorage.setItem('theme', JSON.stringify(darkMode))
   }
}

const loadTheme = () => {
   const actualTheme = JSON.parse(localStorage.getItem('theme'))

   actualTheme ? 
      body.classList.add('dark-mode') 
      : body.classList.remove('dark-mode')
}

const themeSwitcherButton = document.querySelector('[data-themeSwitcher-btn]')
themeSwitcherButton.addEventListener('click', switchTheme)

loadTheme()