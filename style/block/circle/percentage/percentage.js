$('.circle-percentage__input').focusout(function() {
  var sum_perc = $(this).val();
  $('.circle-percentage__ring').css('stroke-dasharray', sum_perc*0.01*295 + ' ' + (295 - sum_perc))
})
