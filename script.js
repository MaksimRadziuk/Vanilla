$(document).ready(function(){
	$("#partnersSlider").slick({
	  dots: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  arrows:true,
	  infinite: true,
	  speed: 2000,
	  slidesToShow: 6,
	  slidesToScroll: 1
	});
	$(".feedback_slider-wrap").slick({
	  dots: false,
	  autoplay:true,
	  autoplaySpeed:3000,
	  arrows:true,
	  infinite: true,
	  speed: 2000,
	  slidesToShow: 5,
	  slidesToScroll: 1
	});
	$(".article_slider-wrap").slick({
	  dots: false,
	  autoplay:false,
	  arrows:true,
	  infinite: true,
	  speed: 400,
	  slidesToShow: 4,
	  slidesToScroll: 1
	});

	$('.faq_block .question').click(function(){
		$(this).next('.answer').slideToggle("slow");
	});
});