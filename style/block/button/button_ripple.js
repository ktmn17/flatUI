function main() {

  $('.button_ripple').click( function(event) {

    var ripPos = $(this).offset(),
    clickX = event.pageX - ripPos.left,
    clickY = event.pageY - ripPos.top,
    div = $('<div>');

    div.addClass('ripple-effect')
    .css({
      left: clickX - 20,
      top: clickY - 20
    })
    .appendTo($(this));

    setTimeout( function() {
      div.remove();
    }, 2000);

  })
}

$('document').ready(main);
