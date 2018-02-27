console.log('common');



$(document).ready(function() {

	// transparent input, etx
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	$('a[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// slider
	$('#js-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		appendArrows:$('.slider__arrows'),
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true
			}
		},
		{
			breakpoint: 569,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
		]
	});
	$('#js-slider-rev').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		fade: true,
		arrows: true,
		appendArrows:$('.slider__arrow')
	});
	$('.js-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-slider-nav'
	});
	$('.js-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-slider-for',
		arrows: false,
		draggable: false,
		focusOnSelect: true
	});
	$('#js-slider-doing').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		arrows: true,
		appendArrows:$('.doing-arrows')
	});
	$('#js-slider-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: true,
		appendArrows:$('.top-arrows')
	});

	$('.answer-btn').click(function () {
		$(this).toggleClass('active')
	});
});






