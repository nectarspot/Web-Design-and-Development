
  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:3,
      autoplay:false,
      margin:30,
      loop:true,
      nav:true,
      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ],
responsive:{ 
320:{
items:1
},
678:{
items:2
},
960:{
items:3}}
  });
});