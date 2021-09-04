$(document).ready(function(){

  //Full width menu
      var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
      var hamburgers = document.querySelectorAll(".mobile-toggle");
      if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
        });
      }
     
      $('.mobile-toggle').click (function() {

        $('#nav').toggleClass('is-active');

        $('body').toggleClass('overflow-y');

      });


    // banner
    $('#banner').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        // autoplay:true,
        animateOut: 'fadeOut',
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //study banner
     $('#study').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        // autoplay:true,
        animateOut: 'fadeOut',
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

     // logos section
     $('.logos').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        700:{
            items:5
        },
        900:{
            items:6
        },
        1200:{
            items:8
        }
    }
});

});

/******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD
