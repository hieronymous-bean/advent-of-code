const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const data = require("../data/Day4.txt");

function processPassports(data) {
	var passports = data.split('\r\n\r\n');
	var passportGroupingA = [];
	var passportGroupingB = [];
	var passportGroupingC = [];

	for (ia = 0; ia < passports.length; ia++) {
		var passportData = (passports[ia].split(' '));
		passportGroupingA.push(passportData);		
	}

	for (ib = 0; ib < passportGroupingA.length; ib++) {

		for (ic = 0; ic < passportGroupingA[ib].length; ic++) {

			if (passportGroupingA[ib][ic].indexOf('\r\n') >= 0 ) {
				passportGroupingB = (passportGroupingA[ib][ic].split('\r\n'));
				console.log(passportGroupingB[ic]);
			}

			
		}

	}


}

processPassports(data);
