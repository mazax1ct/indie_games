$(document).ready(function() {

});

//тогглер мобильного меню
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

//табы
$(document).on('click', '.js-tab-button', function() {
  var parent = $(this).closest('.tabs');

  parent.find('.js-tab-button').removeClass('is-active');
  parent.find('.tab').removeClass('is-active');

  $(this).addClass('is-active');
  parent.find('.tab[data-tab="'+ $(this).attr('data-tab') +'"]').addClass('is-active');

  return false;
});

//тогглер левого меню
$(document).on('click', '.js-left-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $('.left-menu.hidden').slideDown();
  } else {
    $(this).removeClass('is-active');
    $('.left-menu.hidden').slideUp();
  }
  return false;
});

$(".js-date-mask").each(function(index, element) {
  var parent = element.closest('.input-label');

  let dp = new AirDatepicker(element, {
    prevHtml: '<svg title="Назад"><use xlink:href="images/sprite.svg#arrow_left" /></svg>',
    nextHtml: '<svg title="Вперёд"><use xlink:href="images/sprite.svg#arrow_right" /></svg>',
    container: parent,
    /*inline: true,
    visible: true,
    /*onShow: ({date}) => {
      parent.classList.add('is-open');
    },
    onHide: ({date}) => {
      parent.classList.remove('is-open');
    },
    onSelect: ({date}) => {
      parent.classList.add('is-filled');
    }*/
  });
});
