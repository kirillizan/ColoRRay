$(document).ready(function() {
    init();
});

function init() {
    resize();
    addEventListeners();
    showMenu();

    saveRating();
    displayRatings();

    //draw grid
    setTimeout(function() {
        var hexagonGrid = new HexagonGrid("HexCanvas", 40);
        hexagonGrid.drawHexGrid(7, 10, 10, 10, true);
    }, 500);
}

$(window).on('resize', function() {
    resize();
});