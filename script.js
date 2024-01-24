// // menu button 
const menuButton = document.querySelector('#menu');
const modal = document.querySelector('.modal');

menuButton.addEventListener('click', toggleMenu)
function toggleMenu() {
  modal.classList.toggle('show');
  document.querySelector('header').classList.toggle('modal-open');
}


// close button in navigation
const closeModalButton = document.querySelector('#close-modal');

closeModalButton.addEventListener('click', closeMenu)
function closeMenu() {
  modal.classList.remove('show')
}


// button larger text
const textButton = document.querySelector('#text-height');
textButton.addEventListener('click', toggleText)
function toggleText() {
  textButton.classList.toggle('present')
}


// sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
