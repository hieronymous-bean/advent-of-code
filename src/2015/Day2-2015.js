var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day2-2015.txt");
var dimensionRow = data.split('\r\n');
var testNumbers = ['1x1x10','2x3x4'];

function calculateSurfaceArea(length, width, height) {
	let sur1 = (2 * length * width),
		sur2 = (2 * width * height),
		sur3 = (2 * height * length)

	let totalSurface = (sur1 + sur2 + sur3);
	let smallestSurface = Math.min((length*width), (width*height), (height * length));

	return(totalSurface + smallestSurface);

}

function calculateRibbon(x, y, z) {

	let val1 = parseInt(x),
		val2 = parseInt(y),
		val3 = parseInt(z)

	let numArray = [val1, val2, val3];

	numArray.sort(function(a, b) {
		return a - b;
	});

	console.log(numArray);

	let a = numArray[0],
		b = numArray[1],
		c = numArray[2]

	let ribbon = ((a + a) + (b + b));
	let bow = (a * b * c);

	return (ribbon + bow);
}

function parseDimensions(dimensionData) {
	var totalNeeded = 0;
	var ribbonNeeded = 0;
	let extraAmount = 0;
	for (i = 0; i < dimensionData.length; i++) {

		let dimensions = (dimensionData[i].split('x'));

		let l = dimensions[0],
			w = dimensions[1],
			h = dimensions[2]

		totalNeeded = totalNeeded + calculateSurfaceArea(l,w,h);
		ribbonNeeded = ribbonNeeded + calculateRibbon(l,w,h);
	};

	console.log(ribbonNeeded);

}

parseDimensions(dimensionRow);