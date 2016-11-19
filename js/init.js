$(document).ready(function() {
    init();
});

function init() {
    resize();
    addEventListeners();
    showMenu();

    saveRating();
    displayRatings();
}

$(window).on('resize', function() {
    resize();
});