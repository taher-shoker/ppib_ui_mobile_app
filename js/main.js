$(function() {
  $( '.navbar-nav ' ).on( 'click','li', function() {
        $( this ).parent().find( 'li.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
  });
});
  






  var hamburger = $('.navbar-toggler');
  var superContainerInner = $('.screen');
  var isActive = false;

  hamburger.on('click', function()
  {
    superContainerInner.toggleClass('active ');
    isActive = true;
  });

  /***********************/
 $(document).click(function(){
  if ($('.navbar-collapse').hasClass('show')){
    $('.navbar-collapse').removeClass('show') 
    superContainerInner.removeClass('active ');

  } 
}) 