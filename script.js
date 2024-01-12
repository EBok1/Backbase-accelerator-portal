let menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', toggleMenu)
function toggleMenu() { 
  menuButton.classList.toggle('visibility')
}