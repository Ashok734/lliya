

// MAIN SLIDER SECTION=======
$('.main-slider').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 0,
  nav: true,
  dots: true,
  responsiveClass: true,
//   autoHeight: true,
  autoplayTimeout: 12000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


