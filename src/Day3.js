const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const data = require("../data/Day3.txt");
const dataRows = data.split('\n');
const movement = {'x': 5,'y': 1};
const startPosition = {'x': 0,'y': 0};




function treeCounterNew(data, movement, start) {
	var hitCounts = 0;
	var currentPosition = start;

	var mapMatrix = mapToMatrix(data);
	var treesArray = mapMatrix.trees;
	
	for (i = 0; i < mapMatrix.map.length; i++) {

		currentPosition.x = currentPosition.x + movement.x;
		currentPosition.y = currentPosition.y + movement.y;

		if (currentPosition.x > 30) {
			currentPosition.x = (currentPosition.x % 30) - 1;
		}

		for (ib = 0; ib < treesArray.length; ib++) {
			if (currentPosition.x == treesArray[ib].x && currentPosition.y == treesArray[ib].y) {
				console.log(currentPosition.x + ' ' + currentPosition.y + '\n' + treesArray[ib].x + ' ' + treesArray[ib].y);
				hitCounts++;
			}

		}
		
	}

	console.log(treesArray);
	console.log(hitCounts);

};


// Convert Map into Matrix Coords //
function mapToMatrix(mapRowsArray){
	let rows = 0;
	let columns = 0;
	var trees = [];
	var map = [];

	for (ia = 0; ia < mapRowsArray.length; ia++) {
		let currentRow = mapRowsArray[ia];
		let row = [];
		for (ib = 0; ib < currentRow.length; ib++) {

			if (currentRow[ib] == '#') {

				trees.push({'x': ib, 'y': ia});

			}

			row.push([ib, ia]);
		}

		map.push([row]);

	};

	return {map, trees};
};

treeCounterNew(dataRows, movement, startPosition);