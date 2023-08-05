const menuOpener = document.querySelector(".open-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu-flex li");
const logo = document.querySelector(".logo");
const goTopButton = document.querySelector(".go-top");
const heroButton = document.querySelector(".hero-button");
const openMenuImg = document.querySelector(".open-menu img");

var srcPath = "assets/open-menu.svg";
var srcPath2 = "assets/open-menu-open.svg";
var srcPath3 = "assets/close-menu.svg";
var srcPath4 = "assets/close-menu-open.svg";

var isOpened = false;

function closingMenu() {
    mobileMenu.style.transform = "translateY(-200%)";
    mobileMenu.style.opacity = 0;
    mobileMenu.style.scale = 0;
    isOpened = false;
}
function changeMenuImg() {
    if (isOpened) {
        
        if (openMenuImg.src.includes(srcPath)) {
            openMenuImg.src = "./assets/close-menu.svg";
        }
        else if(openMenuImg.src.includes(srcPath2)) {
            openMenuImg.src = "./assets/close-menu-open.svg";
        }
    }
    else {
        if (openMenuImg.src.includes(srcPath3)) {
            openMenuImg.src = "./assets/open-menu.svg";
        }
        else if(openMenuImg.src.includes(srcPath4)) {
            openMenuImg.src = "./assets/open-menu-open.svg";
        }
    }
}

menuOpener.addEventListener("click", () => {
    if (!isOpened) {
        mobileMenu.style.transform = "translateY(0)";
        mobileMenu.style.opacity = 1;
        mobileMenu.style.scale = 1;
        isOpened = true;
    }
    else {
        closingMenu();
    }

    changeMenuImg();
})

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        closingMenu();
        changeMenuImg();
    })
});

logo.addEventListener("click", () => {
    if (isOpened && window.scrollY != 0) {
        closingMenu();
        changeMenuImg();
    }
})

goTopButton.addEventListener("click", () => {
    if (isOpened) {
        closingMenu();
        changeMenuImg();
    }
})

heroButton.addEventListener("click", () => {
    if (isOpened) {
        closingMenu();
        changeMenuImg();
    }
})

window.addEventListener("scroll", () => {
    var navBar = document.querySelector("nav");
    var logo = document.querySelector(".logo a img");
    var openMenu = document.querySelector(".open-menu img");
    
    if (window.scrollY > 200) {
        navBar.classList.add("sticky");
        logo.src = "assets/logo-open.svg";
        if (!isOpened) {
          openMenu.src = "assets/open-menu-open.svg";
        }
        else {
          openMenu.src = "assets/close-menu-open.svg";
        }
      } 
    else if (window.scrollY === 0) {
        navBar.classList.remove("sticky");
        logo.src = "assets/logo.svg";
        if (!isOpened) {
          openMenu.src = "assets/open-menu.svg";
        }
        else {
          openMenu.src = "assets/close-menu.svg";
        }
      }
})