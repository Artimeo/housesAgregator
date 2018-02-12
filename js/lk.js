$(document).ready(function()
{
  var lk_animationSpeed = 300;
  $('.lk-show-menu').click(function () {
    $('.lk-menu').css({display: 'block'});
    $('.lk-menu').animate({opacity: '1'}, lk_animationSpeed);
  });

  $('.lk-mask').click(function () {
    $('.lk-menu').animate({opacity: '0'}, lk_animationSpeed, function() {
      $('.lk-menu').css({display: 'none'});
    });
  });
});
