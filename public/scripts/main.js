$(document).ready(function(){
  $('.fade').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    draggable: true,

  });
});


$(document).ready(function(){
  $(".center").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    arrows: true,
    speed: 500,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
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

// function closeMenu () {
//   var dropMenu = document.querySelector('.dropMenu').style.height;
//   if (dropMenu !== 0){
//     dropMenu = 0;
//   };
// }


function div_show() {
  document.querySelector('.rentalForm').style.display = "block";
  lightsOut();
}
function div_show2() {
  document.querySelector('.fit_form').style.display = "block";
  lightsOut();
}
function close_form() {
document.querySelector('.rentalForm').style.display = "none";
  lightsOn();
}
function close_form2() {
document.querySelector('.fit_form').style.display = "none";
  lightsOn();
}
function lightsOut () {
  document.querySelector('.cover').style.display = "block";
}
function lightsOn() {
  document.querySelector('.cover').style.display = "none";
}
