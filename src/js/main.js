$(document).ready(function() {

});

$(document).on('click', '.js-mobile-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $('body').addClass('is-overflow');
    $(this).addClass('is-active');
    $('.main-menu').addClass('is-active');
  } else {
    $('body').removeClass('is-overflow');
    $(this).removeClass('is-active');
    $('.main-menu').removeClass('is-active');
  }
  return false;
});

$(document).on('click', '.js-popup-closer', function () {
  $('html').removeClass('is-overflow');
  $('.page').removeClass('is-overflow');
  $('.popup').hide();
  return false;
});
