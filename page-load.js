 $(document).ready(function () {

     $('body,html').fadeIn(1000, 'swing');
     window.onbeforeunload = function () {
         $('body,html').fadeOut(1000, 'swing');
     };

     $(".about").click(function () {
         $(".about-pg").fadeToggle(1000, 'swing');
         console.log('clicked');
         $('.about-invert').toggleClass('invertIcon');
         $('#fp-nav,.top-nav,#fullpage').fadeToggle(1000);
     });
     
//     
//     $('.collapse').on('show.bs.collapse', function(e) {
//  var $card = $(this).closest('.card');
//  var $open = $($(this).data('parent')).find('.collapse.show');
//  
//  var additionalOffset = 0;
//  if($card.prevAll().filter($open.closest('.card')).length !== 0)
//  {
//		additionalOffset =  $open.height();
//  }
//  $('html,body').animate({
//    scrollTop: $card.offset().top - additionalOffset
//  }, 500);
//});
 });
