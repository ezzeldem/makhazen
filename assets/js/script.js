$(document).ready(function(){



    $('.menu-icon i').click(function(){
      $('.nav-ul').addClass( "right-0");
      $('.over-lay').show();
      $('body').addClass('over-la')
    })

    $('.close-icon i, .over-lay').click(function(){
      $('.nav-ul').removeClass( "right-0");
      $('.over-lay').hide();
      $('body').removeClass('over-la')
    })
    
    
    // $('#services').click(function(){
    //   $('html, body').animate({
    //       scrollTop: $(".services-section ").offset().top
    //   }, 1000);
    //   $('.nav-ul').removeClass( "right-0");
    //   $('.over-lay').hide();
    //       $('body').removeClass('over-la')
    // });



    // $('#about-us').click(function(){
    //   $('html, body').animate({
    //       scrollTop: $(".partners-section").offset().top
    //   }, 1000);
    //   $('.nav-ul').removeClass( "right-0");
    //   $('.over-lay').hide();
    //       $('body').removeClass('over-la')
    // });

    // $('#contact-us, #contact-id-button').click(function(){
    //   $('html, body').animate({
    //       scrollTop: $(".contact-section").offset().top
    //   }, 1000);
    //   $('.nav-ul').removeClass( "right-0");
    //   $('.over-lay').hide();
    //       $('body').removeClass('over-la')
    // });





    $('.mission-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
          breakpoint: 992,
          settings: { 
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,

          }
        },

      ]
    });


   

    $('.partners-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false, 
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false,

          }
        },
        {
          breakpoint:772,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:false,

          }
        },
        {
          breakpoint:542,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows:false,

          }
        }

      ]
    });




    $('.portfolio-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false, 
      autoplay:true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '30px',
      arrows:false,
      responsive: [
        {
          breakpoint: 1200,
          settings: { 
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,

          }
        },
        {
          breakpoint: 992,
          settings: { 
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            centerMode:false
          }
        },
        {
          breakpoint:772,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false

          }
        },

      ]
    });





    smartScroll.init({
      offset: '0',
    });

    AOS.init();


});

