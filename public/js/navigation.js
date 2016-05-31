
(function($) {
    $(document).ready(function(){
      window.addEventListener( "scroll", function( event ) {
        if ($(this).scrollTop() > 200) {
            // $('.icon-animate').fadeIn(500);
            $('.nav-logo-animate').fadeIn(300);
            // $('.header-wrapper').fadeIn(500);
            // setTimeout(function() {$(".header-wrapper").css("background-color", "white")}, 300);
        } else {
            // $('.icon-animate').fadeOut(500);
            $('.nav-logo-animate').fadeOut(300);
            // $('.header-wrapper').fadeOut(500);
        }
      });
        // $(window).scroll(function(){
        //     // if ($(this).scrollTop() > 10) {
        //     //   $('.arrow').fadeOut(300);
        //     // } else {
        //     //   $('.arrow').fadeIn(300);
        //     // }
        //     if ($(this).scrollTop() > 200) {
        //         // $('.icon-animate').fadeIn(500);
        //         $('.nav-logo-animate').fadeIn(300);
        //         // $('.header-wrapper').fadeIn(500);
        //     } else {
        //         // $('.icon-animate').fadeOut(500);
        //         $('.nav-logo-animate').fadeOut(300);
        //         // $('.header-wrapper').fadeOut(500);
        //     }
        // });
    });
})(jQuery);

function togglescroll() {
  $('body').on('touchstart', function(e) {
    if ($('body').hasClass('noscroll')) {
      // e.preventDefault();
    }
  });
}

$(document).ready(function() {
  togglescroll()

  $(".icon").click(function() {
    $(".mobilenav").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $("body").toggleClass("noscroll");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });
});

// PUSH ESC KEY TO EXIT

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $(".mobilenav").fadeOut(500);
    $(".top-menu").removeClass("top-animate");
    $("body").removeClass("noscroll");
    $(".mid-menu").removeClass("mid-animate");
    $(".bottom-menu").removeClass("bottom-animate");
  }
});
