function sliderInit(slider_id, slider_min, slider_max, _min, _max)
{
  slider_id.slider({
    min: parseInt(_min),
    max: parseInt(_max),
    values: [slider_min.val(), slider_max.val()],
    range: true,
    animate: true,
    stop: function(event, ui) {
      slider_min.val(ui.values[0]);
      slider_max.val(ui.values[1]);
    },
    slide: function(event, ui) {
      slider_min.val(ui.values[0]);
      slider_max.val(ui.values[1]);
    }
  });

  slider_min.change(function() { //Проверка min < max
    var min = slider_min.val();
    var max = slider_max.val();

    if (parseInt(min) > parseInt(max)) {
      min = max;
      slider_min.val(min);
    }
    slider_id.slider('values', 0, min);
  });

  slider_max.change(function() { //Выход за границы max
    var min = slider_min.val();
    var max = slider_max.val();
    var over = slider_id.slider('option', 'max');

    if (max > over) {
      max = over;
      slider_max.val(max);
    }

    if (parseInt(min) > parseInt(max)) {
      max = min;
      slider_max.val(max);
    }
    slider_id.slider('values', 1, max);
  });
};

$(document).ready(function()
{
  $('.ui-input-range input').focus(function(){
    //if(this.value == this.defaultValue){ this.select(); } //Выделять только default value
    this.select(); //Выделять всегда
  });
});
