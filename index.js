var menuIcon = document.getElementsByClassName('menuIcon')[0];
var navLinks = document.getElementsByClassName("nav-links")[0];

menuIcon.addEventListener("click",() => {
  navLinks.classList.toggle("menu-active");
  console.log("ffhfjf");
  if(navLinks.classList.contains("menu-active")){
    menuIcon.setAttribute("src","./assets/close.png");
  }else{
    menuIcon.setAttribute("src","./assets/menu.svg");
  }
});