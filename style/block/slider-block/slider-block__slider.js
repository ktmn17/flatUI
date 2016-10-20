$(function() {
    var handle = $('.ui-slider-handle');

    $('.slider-block__slider_value-number').slider({
        value: 40,
        create: function() {
            handle.text($(this).slider('value'));
        },
        slide: function(event, ui) {
            handle.text(ui.value);
        }
    });

    $('.slider-block__slider_value-range').slider({
      range: 'max',
      value: 75
    });
    
});
