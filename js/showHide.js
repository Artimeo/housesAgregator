$(document).ready(function()
{
  var animationSpeed = 300;
  $('.lk-show-menu').click(function () {
    $('.lk-menu').css({display: 'block'});
    $('.lk-menu').animate({opacity: '1'}, animationSpeed);
  });

  $('.lk-mask, .ui-close#lk-menu').click(function () {
    $('.lk-menu').animate({opacity: '0'}, animationSpeed, function() {
      $('.lk-menu').css({display: 'none'});
    });
  });

  $('.ui-close#map__sale').click(function () {
    $('.map__sale').css({display: 'none'});
  });
  $('.ui-close#map__news').click(function () {
    $('.map__news').css({display: 'none'});
  });

  $('.ui-button-search').click(function () {
    $('.ui-button-search').css({background: 'white'});
    $('.ui-button-search input').css({display: 'inline-block'});
    $('.ui-button-search input').animate({width: '160'}, animationSpeed);
    $('.ui-button-search .ui-close').animate({width: '15'}, animationSpeed);
    $('.ui-button-search').prop('disabled', true);
  });
  $('.ui-close#ui-button-search').click(function () {
    $('.ui-button-search .ui-close').animate({width: '0'}, animationSpeed);

    $('.ui-button-search input').animate({width: '0'}, animationSpeed, function() {
      $('.ui-button-search input').css({display: 'none'});
      $('.ui-button-search').removeAttr('style');
      $('.ui-button-search').prop('disabled', false);
    });
  });



});
