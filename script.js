let menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', toggleMenu)
function toggleMenu() { 
  menuButton.classList.toggle('visibility')
}

let nav = document.querySelector('.nav-links')
menuButton.addEventListener('click', toggleNav)
function toggleNav() { 
  nav.classList.toggle('visibility')
}