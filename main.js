$(document).ready(function() {
	$('#player').on('mouseover', function() {
		$('.navbar').addClass('max');
		$('#player-container').addClass('active');
		$('.video-nav-container').addClass('active');
		$('#player').addClass('medium');
	})
	$('.exit').on('click', function() {
		$('.navbar').removeClass('max');
		$('#player-container').removeClass('active');
		$('.video-nav-container').removeClass('active');
		$('#player').removeClass('medium');
	})
});