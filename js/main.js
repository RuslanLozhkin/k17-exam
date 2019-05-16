$(document).ready(function(){
  $('.js-carousel').slick({
  autoplay: true,
  autoplaySpeed: 4500,
  dots: true,
  infinite: true,
  cssEase: 'linear',
  arrows: false,
  customPaging: function(slider, i) {    
      return '<a href="#"><img src="img/paging.png"><img src="img/activePaging.png"></a>';
  }
  });
  $('.js-gallery').slick({
    autoplay: true,
    autoplaySpeed: 4500,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false
    });
  $('.js-prev').click(function(){
    $('.js-carousel').slick('slickPrev');  
  });
  $('.js-next').click(function(){
    $('.js-carousel').slick('slickNext');
  });
});