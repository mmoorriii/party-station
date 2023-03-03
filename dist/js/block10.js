$(document).ready(()=>{
	$('.block10-comments').slick({
		infinite: false,
		swipe: false, /*false!*/
		variableWidth: true,
		dots: false,
		arrows: true,
		nextArrow: $('.arrow-next-btn'),
		prevArrow: $('.arrow-prev-btn'),
	});
});