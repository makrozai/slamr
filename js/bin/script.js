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

/*mail send*/

(function(){
  emailjs.init("user_Zi381Px4VpQdKb3cOAPt2");
})();


var myform = $("form#myform");
myform.submit(function(event){
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});
  console.log(params);
  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "makrozai";
  myform.find("button").text("Sending...");
  emailjs.send(service_id,template_id,params)
    .then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});