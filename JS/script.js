const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close');
const backDrop = document.querySelector('.back-drop');
// Target the specific mobile links in your CSS
const mobileLinks = document.querySelectorAll('.mobile-menu-link');

function toggleMenu(isOpen) {
  mobileMenu.classList.toggle('show-mobile-menu', isOpen);
  backDrop.classList.toggle('hide', !isOpen);
  // Using a class is cleaner than inline styles
  document.body.classList.toggle('no-scroll', isOpen);
}

if (menuIcon && closeIcon && backDrop) {
  menuIcon.addEventListener('click', () => toggleMenu(true));
  closeIcon.addEventListener('click', () => toggleMenu(false));
  backDrop.addEventListener('click', () => toggleMenu(false));
}

// Ensure clicking a link closes the menu so the user can see the section they clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleMenu(false);
});