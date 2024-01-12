let menuButton = document.querySelector('#menu')
let nav = document.querySelector('.nav-links')

menuButton.addEventListener('click', toggleMenu)
function toggleMenu() { 
  nav.classList.toggle('visibility')
}