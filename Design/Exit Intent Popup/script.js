   var popup = $('.exit-popup');
$(window).scroll(function(){
  var hT = $('#scroll-to').offset().top,
      hH = $('#scroll-to').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   
  if(wS > (hT+hH-wH)){
 
    popup.addClass('popup_show'); 
    $('.exit-popup-content').css('display', 'block'); 
  
  };

  
  $( '.close-btn' ).click(function() {
      popup.css('display', 'none');
      $('.popup_show_overlay').css('display', 'none');

  });
  
  
});