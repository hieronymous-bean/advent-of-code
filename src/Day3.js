const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const data = require("../data/Day3.txt");
const dataRows = data.split('\n');

const movement = [[3, -1]];

function treeCounter(data, movement) {
	
};


// Process Map //
function toArray(data) {
	var dataArray = [];

	for (i = 0; i < dataRow.length; i++) {
    	

    }

};


function mapToMatrix(mapRowsArray){
	var rows = 0;
	var columns = 0;
	var map = [];

	for (ia = 0; ia < mapRowsArray.length; ia++) {
		let currentRow = mapRowsArray[ia];
		
		for (ib = 0; ib < currentRow.length; ib++) {

			if (currentRow[ib] == '#') {

				ic = 1;

			}

			else {

				ic = 0;
			}

			map.push([ia, ib, ic]);
		}

	};
	return map;
};

mapToMatrix(dataRows);