/*$(document).ready(function() {	
	// placeholder
	$('input').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
	// fixed nav scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 30){
			$('header').css({
				'height' : '40px',
				'lineHeight' : '40px',
				'backgroundColor' : '#95e1d3',
				'opacity' : '.8'
			});
			$('header img').css({
				'position' : 'relative',
				'top' : '5px'
			});
		}
		else {
			$('header').css({
				'height' : '80px',
				'lineHeight' : '80px',
				'backgroundColor' : 'transparent',
				'opacity' : '1'
			});
			$('header img').css({
				'position' : 'relative',
				'top' : '0'
			});
		}
	});
	// accordion 
	$('.service_content__accordion').on('click', '.service_content__pict_title', function() {
		var accItem = $(this).closest('.service_content__wrapper').find('.service_content__pict_desc');
		var arrow = $(this).find('.arrow');
		if ( accItem.is(':hidden') ) {
			$(this).closest('.service_content').find('.service_content__pict_desc').slideUp();
			$(this).closest('.service_content').find('.arrow').attr('src', 'img/service_down.png');
			accItem.slideDown();
			arrow.attr('src', 'img/service_up.png');
		}
	});
});
$(window).load(function () {
	$('.preloader').fadeIn('fast');
});