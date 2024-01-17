// // menu button 
const menuButton = document.querySelector('#menu');
const modal = document.querySelector('.modal');

menuButton.addEventListener('click', toggleMenu)
function toggleMenu () {
  modal.classList.toggle('show')
}

// close button in navigation
const closeModalButton = document.querySelector('#close-modal');

closeModalButton.addEventListener('click', closeMenu)
function closeMenu () {
  modal.classList.remove('show')
}
