const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const data = require("../data/Day3.txt");
const dataRows = data.split('\n');
const movement = [3, 1];
const startPosition = [3, 1];


function treeCounter(data, movement, start) {
	var rowCount = 0;
	var columnCount = 0; // needs to restart when it hits 31 //

	var currentPosition = start;
	var movementA = movement[0];
	var movementB = movement[1];

	var mapMatrix = mapToMatrix(data);
	
	for (i = 0; i < mapMatrix.map.length; i++) {
		currentA = currentPosition[0];
		currentB = currentPosition[1];

		newA = currentA + movementA;
		newB = currentB + movementB;

		currentPosition = [newA, newB];
		
		/*
		console.log('Row: ' + rowCount + '\nStart: ' + start + '\nMovement: ' + movement + '\nResult: ' + currentPosition )
		*/
		
	}
};



function treeCounterNew(data, movement, start) {
	var rowCount = 0;
	var columnCount = 0; // needs to restart when it hits 31 //

	var currentPosition = start;
	var movementA = movement[0];
	var movementB = movement[1];

	var mapMatrix = mapToMatrix(data);
	
	for (i = 0; i < mapMatrix.map.length; i++) {
		currentA = currentPosition[0];
		currentB = currentPosition[1];


		newA = currentA + movementA;
		newB = currentB + movementB;

		if (newB > 31) {
			newB = newB - 32;
		}

		currentPosition = [newA, newB];
		
		console.log('Row: ' + rowCount + '\nStart: ' + start + '\nMovement: ' + movement + '\nResult: ' + currentPosition )
	
	}

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

				trees.push([ia, ib]);

			}

			row.push([ia, ib]);
		}

		map.push([row]);

	};

	return {map, trees};
};

treeCounterNew(dataRows, movement, startPosition);