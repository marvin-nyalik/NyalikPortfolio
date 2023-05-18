const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menuBg = document.getElementById('portfolio1');
const { body } = document;
const logo = document.getElementsByClassName('logo');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('error');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const emailValue = emailField.value;

  if (emailValue === emailValue.toLowerCase()) {
    errorMsg.style.display = 'none';
  }

  else {
    event.preventDefault();
    errorMsg.style.display = 'block';
  }
});

function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  body.classList.add('menu-open');
  menuBg.style.filter = 'blur(6px)';
  logo[0].style.filter = 'blur(6px)';
}

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
