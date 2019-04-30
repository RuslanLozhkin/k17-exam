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
  },
  });
  $('.prev').click(function(){
    $('.carousel').slick('slickPrev');  
  });
  $('.next').click(function(){
    $('.carousel').slick('slickNext');
  });
});