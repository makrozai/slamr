$( document ).ready(function(){
  $('.slider').slider({
    indicators:false
  });
  $(".button-collapse").sideNav();
  $('.scrollspy').scrollSpy({
    scrollOffset:0
  });

  $("#blog-landing").pinto({
      itemWidth:250,
      gapX:10,
      gapY:10,
  });
  $('.materialboxed').materialbox();

  $('.single-item').slick({
    dots: true,
    fade:true
  });

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(document).ready(function(){

  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 100){
      if(!flag){
        //aqui es blanco
        $( ".main-nav" ).addClass( "scrolling" );

        flag = true;
      }

    }else{

      if(flag){
        //aqui es transparente
        $( ".main-nav" ).removeClass( "scrolling" );

        flag = false;
      }
    }
  });
});