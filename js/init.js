$(document).ready(function() {
	init();
});

function init() {
	resize();
	showMenu();
}

$(window).on('resize', function() {
	resize();
});