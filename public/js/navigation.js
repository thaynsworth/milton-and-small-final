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

// // Normal Clicks
// $(function() {
//   $('.toggle-nav').click(function() {
//     console.log("top function")
//     $('body').toggleClass('show-nav');
//      return false;
//   });

// });


// // Toggle with hitting of ESC
// $(document).keyup(function(e) {
//     if (e.keyCode == 27) {
//    $('body').toggleClass('show-nav');
//   }
// });

// function tomsFunction () {
//   console.log("hey tom");
// }