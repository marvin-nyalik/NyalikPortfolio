const openMenu = document.getElementById('openBtn');
const closeMenu = document.getElementById('closeBtn');
const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
}

function openMobileMenu() {
  mobileMenu.style.display = 'flex';
}

links.forEach((element) => {
  element.addEventListener('click', closeMobileMenu());
});

openMenu.addEventListener('click', () => {
  openMobileMenu();
});

closeMenu.addEventListener('click', () => {
  closeMobileMenu();
});
