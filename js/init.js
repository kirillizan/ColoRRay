$(document).ready(function() {
    init();
});

function init() {
    resize();
    addEventListeners();
    showMenu();
}

$(window).on('resize', function() {
    resize();
});