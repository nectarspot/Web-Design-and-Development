$(window).scroll(function() {  
 
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".ns-header-area-absolute").addClass("is-sticky");
    } else {
        $(".ns-header-area-absolute").removeClass("is-sticky");
    }
});