$(document).ready(function() {
	var open = false;
	$('.vid-container').on('click', function(e){
		if (open) {
			open = false;
			$('#player-container').animate({height:170})
		} else {
			open = true;
			$('#player-container').animate({height:337})
		}
	});

	$('#j-rail-tease').on('mouseover', function(e){
		if (open) {
			open = false;
			$('#player-container').animate({height:170})
		} else {
			open = true;
			$('#player-container').animate({height:337})
		}
	}).on('mouseout', function(e){
		if (open) {
			open = false;
			$('#player-container').animate({height:170})
		} else {
			open = true;
			$('#player-container').animate({height:337})
		}
	});
});