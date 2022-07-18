

$(document).ready(function() {


  // menu toggle 
  $('#menu-toggle').click(function() {
    $('#nav').toggleClass('header__nav--open')
  })


  // drop item toggle
  $('.dropInfo__heading').click(function() {
    $(this).siblings('.dropInfo__body').slideToggle();
    $(this).toggleClass('dropInfo__heading--open')
  })

})