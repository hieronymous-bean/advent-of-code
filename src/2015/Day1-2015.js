var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day1-2015.txt");

function countFloors(data) {
	var floorCount = 0;
	for (i = 0; i < data.length; i++) {
		if (floorCount == '-1'){
			console.log(i);
		}

		if (data[i] == '(') {
			floorCount++;
		} 

		else if (data[i] == ')') {
			floorCount--;
		}
		
	}

console.log(floorCount);

};

countFloors(data);