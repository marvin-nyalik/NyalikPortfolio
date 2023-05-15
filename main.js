const menu = document.getElementById('menu-popup');
const closebtn =document.getElementsByClassName('close')
function toggleMenu(){
    menu.classList.toggle('menu-popup');
    menu.style.display = 'flex';
}
document.getElementById('HumburgerMenu').addEventListener('click', toggleMenu);

closebtn.addEventListener('click', () =>{
    menu.classList.remove('menu-popup')
});
