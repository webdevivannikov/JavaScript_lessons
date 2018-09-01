$(document).ready(function() {
	$('.main_btna').on('click', function() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown();
	});

	$('.main_btn').on('click', function() {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown();
	});

	$('.main_nav li:eq(1)').on('click', function() {
		console.log('1')
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown();
	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp();
	});
});