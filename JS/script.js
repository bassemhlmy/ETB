const menuIcon = document.querySelector('.nav__menu-icon');
const mobileMenu = document.querySelector('.mobile-nav');
const closeIcon = document.querySelector('.close-icon');
const backDrop = document.querySelector('.back-drop');
menuIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('mobile-nav__show');
  backDrop.classList.toggle('hide');
});
closeIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('mobile-nav__show');
  backDrop.classList.toggle('hide');
});
backDrop.addEventListener('click', function () {
  mobileMenu.classList.toggle('mobile-nav__show');
  backDrop.classList.toggle('hide');
});
navItem.addEventListener('click', function () {
  mobileMenu.classList.toggle('mobile-nav__show');
  backDrop.classList.toggle('hide');
});
