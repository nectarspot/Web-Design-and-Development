$(document).ready(function(){

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

});
