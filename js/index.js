

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

  // slider 
  $('.steps__slider').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    infinite: false,
    appendArrows: '.steps__arrows',
    prevArrow: '<a href="javascript://" class="arrow arrow--prev"><span class="icon-chevron"></span></a>',
    nextArrow: '<a href="javascript://" class="arrow arrow--next"><span class="icon-chevron"></span></a>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
        }
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          // infinite: true,
        }
      }
    ]
  })


  // mobile slider 
  if($(window).width() <= '600') {
    $('.portfolio__grid').slick({
      rows: 3,
      prevArrow: '<a href="javascript://" class="arrow arrow--prev"><span class="icon-chevron"></span></a>',
      nextArrow: '<a href="javascript://" class="arrow arrow--next"><span class="icon-chevron"></span></a>',
      appendArrows: '.portfolio__arrows',
    })
  }

})