$(function() {

  var landingPageHeight = $(window).height();

  $('.scroll-down').on( 'click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: landingPageHeight
    }, 800);
    return false;
  });
});

// Full Page Scroll

$(function() {
  $('#fullpage').fullpage({
    menu: '#timeline',
    anchors: ['firstSlide', 'secondSlide', 'thirdSlide'],
    autoScrolling: false
  });
});