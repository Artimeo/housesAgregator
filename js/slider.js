//Price slider

$(document).ready(function()
{
  $('#price-slider').slider({
    min: 0,
    max: 1000,
    values: [0,1000],
    range: true,
    animate: true,
    stop: function(event, ui) {
      $('#price-min').val($('#price-slider').slider('values', 0));
      $('#price-max').val($('#price-slider').slider('values', 1));
    },
    slide: function(event, ui) {
      $('#price-min').val($('#price-slider').slider('values', 0));
      $('#price-max').val($('#price-slider').slider('values', 1));
    }
  });

  $('#price-min').change(function() { //Проверка min < max
    var min = $('#price-min').val();
    var max = $('#price-max').val();

    if (parseInt(min) > parseInt(max)) {
      min = max;
      $('#price-min').val(min);
    }
    $('#price-slider').slider('values', 0, min);
  });

  $('#price-max').change(function() { //Выход за границы max
    var min = $('#price-min').val();
    var max = $('#price-max').val();
    var over = $('#price-slider').slider('option', 'max');

    if (max > over) {
      max = over;
      $('#price-max').val(max);
    }

    if (parseInt(min) > parseInt(max)) {
      max = min;
      $('#price-max').val(max);
    }
    $('#price-slider').slider('values', 1, max);
  });
});

//Area slider

$(document).ready(function()
{
  $('#area-slider').slider({
    min: 0,
    max: 1000,
    values: [0,1000],
    range: true,
    animate: true,
    stop: function(event, ui) {
      $('#area-min').val($('#area-slider').slider('values', 0));
      $('#area-max').val($('#area-slider').slider('values', 1));
    },
    slide: function(event, ui) {
      $('#area-min').val($('#area-slider').slider('values', 0));
      $('#area-max').val($('#area-slider').slider('values', 1));
    }
  });

  $('#area-min').change(function() { //Проверка min < max
    var min = $('#area-min').val();
    var max = $('#area-max').val();

    if (parseInt(min) > parseInt(max)) {
      min = max;
      $('#area-min').val(min);
    }
    $('#area-slider').slider('values', 0, min);
  });

  $('#area-max').change(function() { //Выход за границы max
    var min = $('#area-min').val();
    var max = $('#area-max').val();
    var over = $('#area-slider').slider('option', 'max');

    if (max > over) {
      max = over;
      $('#area-max').val(max);
    }

    if (parseInt(min) > parseInt(max)) {
      max = min;
      $('#area-max').val(max);
    }
    $('#area-slider').slider('values', 1, max);
  });
});

$(document).ready(function()
{
  $('.ui-input-range input').focus(function(){
    if(this.value == this.defaultValue){
      this.select();
    }
  });
});
