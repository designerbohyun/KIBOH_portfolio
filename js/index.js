
$(document).ready(function(){


    
  $('.main-txt-mask').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  var swiper = new Swiper(".firstSwiper", {
    mousewheel: true
  });


    $('.work-btn').click(function(){
      var height = $(".work-container").offset();
      $('html, body').animate({scrollTop: height.top}, 1000);
      });

    $('.arrow-down').click(function(){
      var height = $(".work-container").offset();
      $('html, body').animate({scrollTop: height.top}, 1000);
    });

    $('.about-btn').click(function(){
        $('.about-container').fadeIn('active');
    });

    $('.close-btn').click(function(){
        $('.about-container').fadeOut('active');
    });

    // work-swiper
    var swiper = new Swiper(".mySwiper", {
      
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $('.swiper-slide').click(function(){
          $('.img-box').toggleClass('active');
      });

      AOS.init();

 
});