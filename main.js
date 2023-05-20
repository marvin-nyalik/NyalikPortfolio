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

// Popup Window
(function createProjects() {
  const projectDetails = [
    {
      name: 'Facebook',
      description: 'a simple clone of Facebook.com',
      image: 'images/project_first.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
    {
      name: 'Dating',
      description: 'connecting couples across borders',
      image: 'images/project_second.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
    {
      name: 'Tonic',
      description: 'national campaign against drug abuse',
      image: 'images/project_third.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
    {
      name: 'Walker',
      description: 'how to keep walking when you cannot keep walking',
      image: 'images/project_fourth.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live_link: 'https://marvin-nyalik.github.io/DestryMarkers/',
      source_link: 'https://github.com/marvin-nyalik/DestryMarkers',
    },
  ];
  const projectContainer = document.getElementById('works');
  projectDetails.forEach((project, index) => {
    const articleTemplate = `
      <article class="card">
        <img src="${project.image}" alt="project1" class="card-project">
        <div>
          <h2>${project.name}</h2>
          <ul>
            <li class="no-bullet">CANOPY</li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                Back End Dev
              </span>
            </li>
            <li class="project-tag">
              <span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                </svg>
                2015
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
        <div class="modal-cover" id="modal-cover">
          <div class="modal" id="modal${index}">
            <div class="modal-head-container">
              <h2>${project.name}</h2>
              <span class="modal-close">&times;</span>
            </div>
            <ul class='modal-ul'>
              <li class="no-bullet">CANOPY</li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  Back End Dev
                </span>
              </li>
              <li class="project-tag">
                <span>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#C1C7D0"/>
                  </svg>
                  2015
                </span>
              </li>
            </ul>
            <img src="${project.image}" alt="project1" class="modal-img">
            <div class="modal-footer">
              <p class="desc">${project.description}</p>
              <div class="details">
                <ul class="tech-stack">
                  <li>${project.technologies[0]}</li>
                  <li>${project.technologies[1]}</li>
                  <li>${project.technologies[2]}</li>
                </ul>
                <hr>
                <div class="view-btn-container">
                  <button class="btn"> <a href="${project.live_link}"> See live <i class="bx bx-right-top-arrow-circle"></i></a></button> 
                  <button class="btn"> <a href="${project.source_link}">See source <i class="bx bxl-github"></i></a> </button>
                </div>
              </div>
            </div>
          </div>
      </article>
    `;
    projectContainer.innerHTML += articleTemplate;
  });
  projectContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
      const modalCover = event.target.parentNode.nextElementSibling;
      document.body.style.overflow = 'hidden';
      modalCover.style.display = 'flex';
    }
    if (event.target.classList.contains('modal-close')) {
      const modalCover = event.target.closest('.modal-cover');
      modalCover.style.display = 'none';
      document.body.style.overflow = 'scroll';
    }
  });
}());