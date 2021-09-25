$(document).ready(function () {
  $('.menu-toggler').on('click', function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  $('#up').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });

});

window.onmousemove = function(e) {
  var container = document.getElementById('nf-container');
  var x = - e.clientX/5, y = - e.clientY/5;
  if(container) {
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
  }
}
