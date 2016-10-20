$( function() {
  var span_between_points = parseInt($('.stages__hr').css('width')) / ($('.stages__point').length - 1);

  $('.stages__point').on('click', function() {
    var i =  $(this).index();
    $('.stages__hr_active').css('width', span_between_points * i);
    $('.stages__point:gt('+ i +')').removeClass('stages__point_active');
    $('.stages__point:eq('+ i +'), .stages__point:lt('+ i +')').addClass('stages__point_active');
  });
});
