
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
              $('.arrow').fadeOut(500);
            } else {
              $('.arrow').fadeIn(500);
            }
            if ($(this).scrollTop() > 350) {
                $('.icon-animate').fadeIn(500);
                $('.nav-logo-animate').fadeIn(500);
            } else {
                $('.icon-animate').fadeOut(500);
                $('.nav-logo-animate').fadeOut(500);
            }
        });
    });
})(jQuery);

function togglescroll() {
  $('body').on('touchstart', function(e) {
    if ($('body').hasClass('noscroll')) {
      e.preventDefault();
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
