$(function() {
    function change_color(input_class) {
        if ($(input_class).prop("checked")) $(input_class).parent().css({
          'background-color': '#4eb7a8',
          'border-color': 'white'
        })
        else $(input_class).parent().css({
          'background-color': '#e5e5e5',
          'border-color': 'c0c0c0'
        })
    }
    $('.form__toggle-input, .form__tickbox-input').click(function() {
        change_color(this);
    });

    $('.form__toggle-input, .form__tickbox-input').each( function() {
      change_color(this);
    });


});
