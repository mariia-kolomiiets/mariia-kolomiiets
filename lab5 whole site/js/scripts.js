$(document).ready(function(){
  $('.galery__img').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    slidesToScroll: 2,
    appendArrows: $('.arrow_galery'),
    nextArrow: '<div class="next arrow" id="nextArrow"></div>',
    prevArrow: '<div class="prew arrow" id="prewArrow"></div>',
    });
});
