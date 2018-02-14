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
});
