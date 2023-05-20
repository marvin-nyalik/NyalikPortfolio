const openMenu = document.getElementById('openBtn');
const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menuBg = document.getElementById('portfolio1');
const { body } = document;
const logo = document.getElementsByClassName('logo');

function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  body.classList.add('menu-open');
  menuBg.style.filter = 'blur(6px)';
  logo[0].style.filter = 'blur(6px)';
}

openMenu.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  menuBg.style.filter = '';
  logo[0].style.filter = '';
  body.classList.remove('menu-open');
}

Array.from(links).forEach((element) => {
  element.addEventListener('click', closeMobileMenu);
  body.classList.remove('menu-open');
});

function checkWindowSize() {
  if (window.innerWidth > 768) {
    mobileMenu.style.display = 'none';
    body.classList.remove('menu-open');
    menuBg.style.filter = '';
    logo[0].style.filter = '';
  }
}

window.onresize = checkWindowSize;

