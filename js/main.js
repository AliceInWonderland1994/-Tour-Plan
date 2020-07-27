var hotelSlider = new Swiper('.hotel-slider', {
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

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
  keyboard: true,
});

ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [40.979865, 28.886546],
                zoom: 15
    });
}

var placemark = new ymaps.Placemark([40.979865, 28.886546], {
    balloonContent: 'Hilton Grand Hotel',
    hintContent: 'Hilton Grand Hotel' 
  });

myMap.geoObjects.add(placemark);
placemark.balloon.open();

$('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpg'});


