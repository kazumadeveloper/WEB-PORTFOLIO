var modal = document.getElementById('id01');

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// JavaScript for toggling the hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

