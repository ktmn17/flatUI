$( function() {

  $( '.form__select' ).click( function() {
    $( this ).children( '.form__select-option_no-drop' ).remove();
  });
});
