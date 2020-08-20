$(document).ready(function(){
   
    $("#slider__inner, #newsSlider").slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
    });
    
    $(".icon-bars").on("click", function(){
        $(".menu ul").slideToggle();
        if (!$("#slider").hasClass('slider__morze')) {
        $("#slider").addClass('slider__morze');
        } 
            else {
        $("#slider").removeClass('slider__morze');
        }
        
});
    $(".about__btn").on("click", function(){
        $('.about__hidetext').css({
                            "display" : "default",
                            "max-height" : "none"
                            }).slideToggle();
    });

    
    $("nav ul li #nav").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    
    
     $(".slider__btn a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    

    $(".services__item-btn").on("click", function(){
        $(".modal__btn").val("Заказать");
    });
    
    
    $(".dfb").on("click", function(){
        $(".modal__btn").val("Консультироватся");
    });
    
});
   


