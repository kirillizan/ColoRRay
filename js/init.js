$(document).ready(function() {
	init();
});

function init() {
	$(window).on('resize', resize());
}

$(window).on('resize', function() {
	resize();
});