// Dark Mode Toggler
const mode = document.querySelector(".dark__mode__toggler")
const icon = document.querySelector(".dark__mode__icon")
const header = document.querySelector(".section__header")
const navbar = document.querySelector(".navbar")
const section = document.querySelectorAll("section")
const footer = document.querySelector("footer")

mode.addEventListener("click", ()=>{
        icon.classList.toggle("fa-moon")
        icon.classList.toggle("fa-sun")
        header.classList.toggle("dark-mode")
        navbar.classList.toggle("dark-mode")
        for (let i = 0; i < section.length; i++) {
            section[i].classList.toggle("dark-mode")   
        }
        footer.classList.toggle("dark-mode")
})



// Fixed Navbar
$(".js--fixed-nav").waypoint(function (direction) {
    if (direction == "down") {
        $(".js--nav").addClass("fixed")
    } else {
        $(".js--nav").removeClass("fixed")
    }
    
},{
    offset:"80px"
})

// Linking buttons and links
$("a[href*='#']").on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'linear'
    )
})

// Mobile Menu
var menu = document.querySelector(".menu__toggler")
var menu__icon = document.querySelector(".menu__icon i")cls

var nav__link = document.querySelector(".nav__links")
var navLink = document.querySelectorAll(".nav-link")

menu.addEventListener("click", ()=>{
    if (menu__icon.classList.contains("fa-bars")){
        menu__icon.classList.add("fa-times")
        menu__icon.classList.remove("fa-bars")
        nav__link.classList.add("active")
    }else if(menu__icon.classList.contains("fa-times")){     
        menu__icon.classList.add("fa-bars")
        menu__icon.classList.remove("fa-times")
        nav__link.classList.remove("active")
    }
})

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', ()=>{
        if(menu__icon.classList.contains("fa-times")){
            menu__icon.classList.add("fa-bars")
            menu__icon.classList.remove("fa-times")
            nav__link.classList.remove("active")
        }
    }) 
}   