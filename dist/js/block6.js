$(document).ready(()=>{
	$('.fst-slider').slick({
		initialSlide: 0,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		swipe: false, /*false!*/
		autoplay: true,
		autoplaySpeed: 6000,
		variableWidth: true,
		dots: true,
		arrows: false,
		appendDots: $('.slider-list-dots'),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
				}
			}
		]
	});

	if($(window).width() >= 759) $('.fst-slider').slick('unslick');

	var current = 1;
	var numBlocks = $('.fst-slider .blocks').length;
	var direction = 1;

	$('.fst-slider .blocks:nth-child(' + current + ') .block-slider').addClass('active');
	function animateBlocks() {
		$('.fst-slider .blocks:nth-child(' + current + ') .block-slider').removeClass('active');
		if (current == numBlocks) direction = -1;
		else if (current == 1) direction = 1;
		current += direction;
		$('.fst-slider .blocks:nth-child(' + current + ') .block-slider').addClass('active');
	}
	setInterval(animateBlocks, 6450);
});