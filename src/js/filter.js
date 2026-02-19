$(document).on('click', '.js-filter-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    $('.filter').slideDown();
  } else {
    _this.removeClass('is-active');
    $('.filter').slideUp();
  }
  return false;
});

$(document).on('click', '.js-filter-section-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.closest('.filter__section').find('.filter__section-dropdown').slideDown();
  } else {
    _this.removeClass('is-active');
    _this.closest('.filter__section').find('.filter__section-dropdown').slideUp();
  }
  return false;
});

$(document).on('click', '.js-filter-cut-toggler', function () {
  var oldText = $(this).text();
  $(this).text($(this).attr('data-text'));
  $(this).attr('data-text', oldText);
  $(this).prev('.filter__list-cut').slideToggle();
  return false;
});
