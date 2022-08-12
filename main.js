const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const closeMenu = document.querySelector(".close");
menu.addEventListener("click", function(){
    this.style.display = "none";
    nav.style.display = "block";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "block";
});
