const swiper = new Swiper('.js-gallery', {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0
    }
  }
});
