const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcone = document.querySelector('.close')
const backDrop = document.querySelector('.back-drop');
menuIcon.addEventListener('click',function(){
  mobileMenu.classList.toggle('show-mobile-menu');
  backDrop.classList.toggle('hide');
});
closeIcone.addEventListener('click',function(){
  mobileMenu.classList.toggle('show-mobile-menu');
  backDrop.classList.toggle('hide');
});
backDrop.addEventListener('click',function(){
  mobileMenu.classList.toggle('show-mobile-menu');
  backDrop.classList.toggle('hide');
});
navItem.addEventListener('click',function(){
  mobileMenu.classList.toggle('show-mobile-menu');
  backDrop.classList.toggle('hide');
});







