$(function() {
  $( '.form__text_name' ).focusout(function() {
    var current_text_info =  $( this ).next( '.form__text-info' );

    if ($( this ).val().length < 2) {
      current_text_info.addClass( 'form__text-info_error' );
    } else current_text_info.removeClass( 'form__text-info_error' );

    current_text_info.fadeIn(800);
  });

  $( '.form__text_name' ).inputmask( 'Aaaaaaaaaaaaa', {
    placeholder: ''
  });

  function validateEmail( email ) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
  }

  $( '.form__text_email' ).focusout(function() {
    var current_text_info =  $( this ).next( '.form__text-info' );

    if ( !(validateEmail( $( this ).val() )) ) {
      current_text_info.addClass( 'form__text-info_error' );
    } else current_text_info.removeClass( 'form__text-info_error' );

    current_text_info.fadeIn(800);
  });
});
