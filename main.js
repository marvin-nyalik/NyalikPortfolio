const openMenu = document.getElementById('openBtn');
const closeMenu = document.getElementById('closeBtn');
const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menu_bg = document.getElementById('portfolio1');
const { body } = document;
const logo = document.getElementsByClassName('logo');

//form validation
const emailField = document.getElementById('email');
const errorMsg = document.getElementById("error");
const form = document.getElementById('form');

form.addEventListener('submit', (event)=>{
  let emailValue = emailField.value;

  if(emailValue === emailValue.toLowerCase()){
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
  menu_bg.style.filter = 'blur(6px)';
  logo[0].style.filter = 'blur(6px)';
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  menu_bg.style.filter = '';
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
    menu_bg.style.filter = '';
    logo[0].style.filter = '';
  }
}

window.onresize = checkWindowSize;

