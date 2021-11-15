$(function(){

$('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay : 2050
 });
 
 $('.specialised__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<img  class = "slider-arrows slider-arrows__left"  src="images/arrows-right.svg" alt=""></img>',
    nextArrow: '<img  class = "slider-arrows slider-arrows__right" src="images/arrows-left.svg" alt=""></img>',
    autoplay : 2050
    
  });
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
    });