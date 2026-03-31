const swiper = new Swiper('.js-studios-slider', {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: '.js-studios-slider-next',
    prevEl: '.js-studios-slider-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
});
