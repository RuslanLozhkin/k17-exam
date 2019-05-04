$(document).ready(function(){
  $('.carousel').slick({
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
  $('.gallery').slick({
    autoplay: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false
    });
  $('.prev').click(function(){
    $('.carousel').slick('slickPrev');  
  });
  $('.next').click(function(){
    $('.carousel').slick('slickNext');
  });
  $('.prev__gallery').click(function(){
    $('.gallery').slick('slickPrev');  
  });
  $('.next__gallery').click(function(){
    $('.gallery').slick('slickNext');
  });
});