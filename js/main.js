let hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'cube',
  keyboard: true,
});
let reviewsSlider = new Swiper('.reviews-slider', {
// Optional parameters
loop: true,

// Navigation arrows
navigation: {
  nextEl: '.reviews-slider__button--prev',
  prevEl: '.reviews-slider__button--next',
},
keyboard: true,
});

$('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});


var menuButton = document.querySelector(".menu-button");
console.log(menuButton)
menuButton.addEventListener("click", function () {
console.log("Клик по кнопке меню");
document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom_visible");
});