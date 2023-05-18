const openMenu = document.getElementById('openBtn');
const closeMenu = document.getElementById('closeBtn');
const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menu_bg = document.getElementById('portfolio1');
const { body } = document;
const logo = document.getElementsByClassName('logo');

// local storage
const mail = document.getElementById('mail');
const username = document.getElementById('username');
const message = document.getElementById('message');

let contactData = {
  mail,
  message,
  username
};

if (localStorage.getItem('contactData') !== null) {
  let data = JSON.parse(localStorage.getItem('contactData'));
  mail.value = data.mail;
  username.value = data.username;
  message.value = data.message;
}

mail.addEventListener('change', (e) => {
  contactData.mail = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contactData',JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.mail = mail.value;
  contactData.username = e.target.value;
  contactData.message = message.value;
  localStorage.setItem('contactData',JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.mail = mail.value;
  contactData.username = username.value;
  contactData.message = e.target.value;
  localStorage.setItem('contactData',JSON.stringify(contactData));
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