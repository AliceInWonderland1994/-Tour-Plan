$(document).ready(function () {
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
  
  
  var menuButton = $(".menu-button");
  console.log(menuButton)
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom_visible");
  });

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    let targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");    
  }
  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  //Это то, что я тут навытворяла...
  
  /*$(closeModalButton).click(function() {
    $(this).parents(modalDialog).fadeOut();
    return false;
  });

  $(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
      $('.modal').fadeOut();
		}
  });
  $('.modal').click(function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut();					
		}
	});*/
  
});