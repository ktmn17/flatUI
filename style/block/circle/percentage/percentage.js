var input_percentage_class = $('.circle-percentage__input');

function create_length_of_ring(input_class) {

    var input_perc = +($(input_class).val());
    if (input_perc == 0) $(input_class).val(0);
    if (input_perc >= 100) {
        input_perc = 100;
        $(input_class).val(100);
        $(input_class).css('font-size', '28px').css('top', '30%');
    } else $(input_class).css('font-size', '40px').css('top', '25%');

    var i = $(input_class).index('.circle-percentage__input');
    var circle_radius = parseInt($('.circle-percentage__svg-ring').eq(i).css('r'));
    var length_ring = circle_radius * 2 * 3.14;

    $('.circle-percentage__svg-ring').eq(i)
    .css('stroke-dasharray', input_perc * 0.01 * length_ring + ' ' + (length_ring - input_perc));
}


input_percentage_class.focusout(function() {
    create_length_of_ring(this);
});

input_percentage_class.each(function(i) {
    create_length_of_ring(input_percentage_class.eq(i));
});


input_percentage_class.inputmask('999', {
    placeholder: ''
});
