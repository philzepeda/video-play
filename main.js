$(document).ready(function() {
	$('#player').on('mouseover', function() {
		$('#player-container').addClass('player-bg');
	}).on('mouseout', function() {
		$('#player-container').removeClass('player-bg');
	})
});