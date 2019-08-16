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

//     $('.collapse').on('show.bs.collapse', function (e) {
//         var o = $('.test').position();
//        console.log("position: "+ o.top); 
//         
//         $('html,body').animate({
//             scrollTop: 0
//         }, 500);
//         console.log("animated");
//     });
 });
