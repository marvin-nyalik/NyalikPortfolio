const openMenu = document.getElementById('openBtn');
const closeMenu = document.getElementById('closeBtn');
const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menu_bg = document.getElementById('portfolio1');
const { body } = document;


function openMobileMenu() {
    mobileMenu.style.display = 'flex';
    body.classList.add('menu-open');
    menu_bg.style.filter = 'blur(6px)';
  }
  
function closeMobileMenu() {
    mobileMenu.style.display = 'none';
    menu_bg.style.filter = '';
    body.classList.remove('menu-open');
  }

links.forEach((element) => {
  element.addEventListener('click', closeMobileMenu());
  body.classList.remove('menu-open');
});

function checkWindowSize() {
    if (window.innerWidth > 768) {
      mobileMenu.style.display = 'none';
      body.classList.remove('menu-open');
    } else {
      mobileMenu.style.display = 'flex';
    }
  }
  
  window.onresize = checkWindowSize;

