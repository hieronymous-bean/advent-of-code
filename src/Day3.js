const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const data = require("../data/Day3.txt");
const dataRow = data.split('\n');

const movement = [[3, -1]];

function treeCounter(data, movement) {
	
};


// Process Tree Map //
function toArray(data) {
	var dataRow = data.split('\n');
	var dataArray = [];

	for (i = 0; i < dataRow.length; i++) {
    	

    }
    
};