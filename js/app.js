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
	// mansory
	$('.slider-case').masonry({
		columnWidth: '.case__item-sizer',
		horizontalOrder: true,
		itemSelector: '.case__item',
		percentPosition: true
	});

	// slider
	$('#js-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		appendArrows:$('.slider__arrows'),
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				appendArrows:$('.slider__arrows-m')
			}
		},
		{
			breakpoint: 569,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				appendArrows:$('.slider__arrows-m')
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
		asNavFor: '.js-slider-nav',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			}
		}
		]
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
		appendArrows:$('.doing-arrows'),
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 651,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				appendArrows:$('.doing-arrows')

			}
		}
		]
	});
	$('#js-slider-case').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 9999,
			settings: 'unslick'
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: true,
				appendArrows:$('.slider-case-arrows')
			}
		},
		{
			breakpoint: 569,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				appendArrows:$('.slider-case-arrows')
			}
		}
		]
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
	$('#js-btn-toggle').click(function () {
		$('.travels-toggle-m').slideToggle();
	});
});






