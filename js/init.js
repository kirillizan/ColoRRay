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
    var hexagonGrid = new HexagonGrid("HexCanvas", 50);
    hexagonGrid.drawHexGrid(7, 10, 50, 50, true);
}

$(window).on('resize', function() {
    resize();
});