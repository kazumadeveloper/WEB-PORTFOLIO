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

let darkMode = document.getElementById("darkMode");

darkMode.onclick = function() {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains("dark-mode")){
        darkMode.src = "img/light-mode.png";
    }else{
        darkMode.src = "img/dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png";
    }
 }





