// Copyright Year

$(function() {
  var copyrightDate = new Date();
  var copyrightYear = copyrightDate.getFullYear();

  if ( copyrightYear != '2014' ) {
    $( '#copyright-year-future' ).append( '&#8722; ' + copyrightYear + ' ' );
  }
});




// Scroll Down Landing Page

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
    anchors: ['firstSection', 'secondSection', 'thirdSection'],
    autoScrolling: false,
    easing: 'easeInOutQuad',
    scrollOverflow: true
  });
});




// Toggle Navigation

$(function() {

  var timelineToggleOpen = $( '#timeline-open' );
  var timelineToggleClose = $( '#timeline-close')
  var timelineMenu = $( '.timeline-container' );

  timelineToggleOpen.on( 'click', function(e) {
    e.preventDefault();

    $(this).animate({
      opacity: 0
    }, 200);

    timelineMenu.animate({
      right: 0
    }, 400);
  });


  timelineToggleClose.on( 'click', function(e) {
    e.preventDefault();

    timelineToggleOpen.animate({
      opacity: 1
    }, 400);

    timelineMenu.animate({
      right: -250
    }, 400);
  });


});