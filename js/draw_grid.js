window.onload = function () {
	// Create a random grid with this configuration.
	var minHeight = 3,
	minWidth = 3,
	maxWidth = 10;
	maxHeight = 15;
	
	var newRandomGrid = function () {
		var width = 7;//Math.floor(Math.random() * (maxWidth - minWidth)) + minHeight;
		var height = 7;//Math.floor(Math.random() * (maxHeight - minHeight)) + minWidth;
		
		var grid = document.getElementById('grid');
		
		// Delete everything inside the grid element.
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
		}
		
		// Create a new grid.
		var App = require('/src/App.js');
		var app = new App({
			container: grid,
		    tileSize: 52,
		    width: width,
		    height: height,
		    //onAnimationComplete: arguments.callee
		});
		
		return app;
	}
	
	var app = newRandomGrid();
}; 
