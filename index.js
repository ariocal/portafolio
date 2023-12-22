
const navIcon = document.querySelector(".nav-icon-button");
const navMenu = document.querySelector(".nav-menu");
const navmenulinks = document.querySelectorAll(".nav-menu-link");

navIcon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
    navMenu.classList.remove("nav-menu-invisible");
    console.log("presionado");
});

navmenulinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu-invisible");
        navMenu.classList.remove("nav-menu-visible");
    });
});


/*VENTANA DESPLAZANTE ABOUT*/
document.getElementById('read-more').addEventListener('click', function () {
    const menu = document.getElementById('hamburger-menu-about');

    if (!menu.classList.contains('show-menu')) {
        menu.classList.add('show-menu'); // Muestra el menú
    } else {
        menu.classList.remove('show-menu'); // Oculta el menú
    }
});


/*MODO DARK AND LIGHT*/
const lightModeBtn = document.querySelector(".light-mode-btn");
const darktModeBtn = document.querySelector(".dark-mode-btn");

lightModeBtn.addEventListener("click", setDarkMode);
darktModeBtn.addEventListener("click", setLightMode);

function setDarkMode(){
    setUserTheme("dark");
}
function setLightMode(){
    setUserTheme("light");
}
function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}





/* for (let i = 0; i < navmenulink.length; i++) {
    navmenulink[i].addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu-invisible");
        navMenu.classList.remove("nav-menu-visible");
        console.log("presionado link");
    });
} */

/* array.forEach(function (elemnt){
       elemnt.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu-invisible");
        navMenu.classList.remove("nav-menu-visible");
        console.log("presionado link");
    });
}); */

