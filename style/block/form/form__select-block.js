$( function() {

  $( '.form__select' ).selectmenu();

  $(".form__select").each(function() {
    $( this ).children( 'option' ).first().remove();    
  });

});
