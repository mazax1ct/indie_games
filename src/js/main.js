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

$(document).on('click', '.js-tab-button', function() {
  var parent = $(this).closest('.tabs');

  parent.find('.js-tab-button').removeClass('is-active');
  parent.find('.tab').removeClass('is-active');

  $(this).addClass('is-active');
  parent.find('.tab[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');

  return false;
});
