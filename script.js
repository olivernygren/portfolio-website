const menuIcon = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('change');
});