const links = document.getElementsByClassName('link');
const mobileMenu = document.getElementById('mobile-menu');
const menuBg = document.getElementById('portfolio1');
const { body } = document;
const logo = document.getElementsByClassName('logo');
const emailField = document.getElementById('email');
const errorMsg = document.getElementById('error');
const form = document.getElementById('form');
const openBtn = document.getElementById('openBtn');
const header = document.getElementsByTagName('header')[0];

form.addEventListener('submit', (event) => {
  const emailValue = emailField.value;

  if (emailValue === emailValue.toLowerCase()) {
    errorMsg.style.display = 'none';
  } else {
    event.preventDefault();
    errorMsg.style.display = 'block';
  }
});

// local storage
const mail = document.getElementById('mail');
const username = document.getElementById('username');
const message = document.getElementById('message');

const contactData = {
  mail: '',
  message: '',
  username: '',
};

if (localStorage.getItem('contactData') !== null) {
  const data = JSON.parse(localStorage.getItem('contactData'));
  mail.value = data.mail;
  username.value = data.username;
  message.value = data.message;
}

mail.addEventListener('change', (e) => {
  contactData.mail = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.mail = mail.value;
  contactData.username = e.target.value;
  contactData.message = message.value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.mail = mail.value;
  contactData.username = username.value;
  contactData.message = e.target.value;
  localStorage.setItem('contactData', JSON.stringify(contactData));
});

function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  body.classList.add('menu-open');
  menuBg.style.filter = 'blur(8px)';
  logo[0].style.visibility = 'hidden';
  openBtn.style.visibility = 'hidden';
  body.style.overflow = 'hidden';
}

openBtn.addEventListener('click', openMobileMenu);

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  menuBg.style.filter = '';
  logo[0].style.visibility = 'visible';
  body.classList.remove('menu-open');
  openBtn.style.visibility = 'visible';
  body.style.overflow = 'scroll';
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
// Popup Window
(function createProjects() {
  const projectDetails = [
    {
      name: 'IMovies',
      description: 'IMovies is a Single-page Web Application built with JavaScript ES6. It uses the free TVMAZE-API to showcase information about movies and Television shows.',
      image: 'images/IMoviesShowcase.png',
      class : 'Remote',
      type : 'Collaborative',
      technologies: ['ES6', 'Webpack', 'HyperText-ML'],
      live_link: 'https://marvin-nyalik.github.io/IMovies/dist/',
      source_link: 'https://github.com/marvin-nyalik/IMovies',
    },
    {
      name: 'Leaderboard',
      description: 'This project consumes the Leaderboard API Service using JavaScript Async and Await to display scores submitted by different players',
      image: 'images/leaderboard.png',
      class: 'Personal',
      type:'In-house',
      technologies: ['HyperText-ML', 'JavaScript', 'CSS'],
      live_link: 'https://marvin-nyalik.github.io/Leaderboard/dist/',
      source_link: 'https://github.com/marvin-nyalik/Leaderboard',
    },
    {
      name: 'Tonic',
      description: 'An enthusiastic movement of the national campaign against drug abuse to help the youth overcome the mystery of addiction.',
      image: 'images/project_third.png',
      class: 'Demo',
      type:'In-house',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
    {
      name: 'Walkers Hikers',
      description: 'A buddy.io connection site for hikers with the love of nature. This is how to keep walking when you cannot keep walking',
      image: 'images/project_fourth.png',
      class: 'Demo',
      type:'In-house',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
  ];
  const projectContainer = document.getElementById('works');
  projectDetails.forEach((project, index) => {
    const articleTemplate = `<div class="card-wrapper">
     <article class="card">
        <div class="img-div">
        <img src="${project.image}" alt="project1" class="card-project">
        </div>
        <div>
          <h2>${project.name}</h2>
          <ul class="card-list">
            <li class="no-bullet">${project.class}</li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                ${project.type}
              </span>
            </li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                &copy;2023
              </span>
            </li>
          </ul>
          <p>${project.description}</p>
          <ul class="tech-stack">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
          </ul>
          <button class="btn" type="button">See Project</button>
        </div>
        <div class="modal-cover" id="modal-cover${index}">
          <div class="modal" id="modal${index}">
            <div class="modal-head-container">
              <h2 id="mdlhead-${index}">${project.name}</h2>
              <span class="modal-close">&times;</span>
            </div>
            <ul class='modal-ul'>
              <li class="no-bullet">${project.class}</li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  ${project.type}
                </span>
              </li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  &copy;2023
                </span>
              </li>
            </ul>
            <img src="${project.image}" alt="project1" class="modal-img" id="mdl-${index}">
            <div class="modal-footer">
              <p class="desc" id="mdldesc-${index}">${project.description}</p>
              <div class="details">
                <ul class="tech-stack" id="mdltecstk-${index}">
                  <li>${project.technologies[0]}</li>
                  <li>${project.technologies[1]}</li>
                  <li>${project.technologies[2]}</li>
                </ul>
                <div class="view-btn-container">
                  <button class="mdbtn" type="button" id="mdlbtn${index}"> <a href="${project.live_link}"> Live <i class="bx bx-right-top-arrow-circle"></i></a></button> 
                  <button class="mdbtn" type="button" id="mdlbtn-${index}"> <a href="${project.source_link}">Source <i class="bx bxl-github"></i></a> </button>
                </div>
              </div>
            </div>
          </div>
      </article>
      </div>
    `;
    projectContainer.innerHTML += articleTemplate;
  });
  projectContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      const modalCover = event.target.parentNode.nextElementSibling;
      document.body.style.overflow = 'hidden';
      modalCover.style.display = 'flex';
      header.style.display = 'none';
    }
    if (event.target.classList.contains('modal-close')) {
      const modalCover = event.target.closest('.modal-cover');
      modalCover.style.display = 'none';
      document.body.style.overflow = 'scroll';
      header.style.display = 'block';
    }
  });
}());
