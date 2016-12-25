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
    var hexagonGrid = new HexagonGrid("HexCanvas", 40);
    hexagonGrid.drawHexGrid(7, 10, 100, 100, true);

}

$(window).on('resize', function() {
    resize();
});