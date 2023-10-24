// $(document).ready(function(){
//     $("#me").click(function(){
//         $("#body").slideToggle("slow");
//     })
// })


$(document).ready(function(){
    $('.slidre').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-chevron-left prev-arr"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right nxt-arr"></i>',
    
  });
  });