$(document).ready(function(){
  $('.fade').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    draggable: true
  });
});


$(document).ready(function(){
  $(".center").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
