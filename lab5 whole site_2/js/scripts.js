$(document).ready(function(){
  $('.galery__img').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 2,
    appendArrows: $('.arrow_galery'),
    nextArrow: '<div class="next arrow" id="nextArrow">></div>',
    prevArrow: '<div class="prew arrow" id="prewArrow"><</div>',
    responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    });
});
