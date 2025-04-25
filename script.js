const navLinks= document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle Mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
//Close menu when close button is clicked
menuCloseButton.addEventListener("click", ()=> menuOpenButton.click())

//Close menu button when nav link is clicked
navLinks.forEach(link =>{
  link.addEventListener("click", ()=> menuOpenButton.click())
})

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  observer: true,
  observeParents: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
  768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
  }

});
