$(document).ready(function () {
  const dynamicMap = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35048.4795681779!2d-80.75322807378757!3d32.143307487284595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11119db70ffab838!2sOcean%20Oak%20Resort%20by%20Hilton%20Grand%20Vacations!5e0!3m2!1sru!2sru!4v1596100453634!5m2!1sru!2sru`

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
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: true,
  });
  
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});
  
  
  let menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom_visible");
  });

  $(document).ready(function () {

      const mapFrame = $("#map");
      const container = $("#mapContainer")
      mapFrame.hover(()=>{
              mapFrame.attr('src', dynamicMap);
          },
          ()=>{
          })

    const modalButton = $("[data-toggle=modal]");
    const closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);
    
    function openModal() {
        const targetModal = $(this).attr("data-href");
        $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
        $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    }
    function closeModal(event) {
        event.preventDefault();
        let modalOverlay = $(".modal__overlay");
        let modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        event.stopPropagation();
    }
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode === 27) {
            closeModal(evt)
        }
    };
  });
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlenght: "Name must be more than 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
        },
      },
    });
  });
  $(".subscribe").each(function() {
    $(this).validate({
      errorClass: "error",
      messages: {
        email: {
          required: "This field is empty",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  $(elements).lazyLoadXT();
});
