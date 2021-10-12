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
$('a[href*="#"]').on('click', function (e) {
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
var menu__icon = document.querySelector(".menu__icon i")
var nav__link = document.querySelector(".nav__links")

menu.addEventListener("click", ()=>{
    if (menu__icon.classList.contains("fa-bars")){
        menu__icon.classList.add("fa-times")
        menu__icon.classList.remove("fa-bars")
        nav__link.classList.add("active")
    }else {
        menu__icon.classList.add("fa-bars")
        menu__icon.classList.remove("fa-times")
        nav__link.classList.remove("active")
    }
})


// GSAP Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from(".animate-hero", {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from(".animate-services", {
    scrollTrigger: ".animate-services",
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from(".animate-img", {
    scrollTrigger: ".animate-services",
    duration: 1.2,
    opacity: 0,
    x: -200
});

gsap.from(".animate-membership", {
    scrollTrigger: ".animate-membership",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from(".animate-card", {
    scrollTrigger: ".animate-card",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});

gsap.from(".animate-team", {
    scrollTrigger: ".animate-team",
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from(".animate-email", {
    scrollTrigger: ".animate-email",
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.3
});