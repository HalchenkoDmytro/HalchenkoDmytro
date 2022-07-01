$(document).ready(function(){
  $('.yourClass').slick({
    dots: true,
  });
});

$(document).ready(function(){
  $('.product-list').slick({  
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
        }
      }
    ]      
  });
});


$(document).ready(function(){
  $('.partners-list').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    prevArrow: $('.prev-partners'),
    nextArrow: $('.next-partners'),
  });
});



