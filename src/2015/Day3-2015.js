var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day3-2015.txt");

var startingLocation = [0,0];

function moveNorth(currentPosition) {
	let currentX = currentPosition[0],
		currentY = currentPosition[1]

	let newX = currentX,
		newY = currentY + 1

	return [newX,newY];
};

function moveSouth(currentPosition) {
	let currentX = currentPosition[0],
		currentY = currentPosition[1]

	let newX = currentX,
		newY = currentY - 1

	return [newX,newY];
};

function moveWest(currentPosition) {
	let currentX = currentPosition[0],
		currentY = currentPosition[1]

	let newX = currentX - 1,
		newY = currentY

	return [newX,newY];
};

function moveEast(currentPosition) {
	let currentX = currentPosition[0],
		currentY = currentPosition[1]

	let newX = currentX + 1,
		newY = currentY

	return [newX,newY];
};

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

// Single Santa //
function parseCoordinateData(movementData, startingLocation) {
	let currentPosition = startingLocation;
	let positionArray = [],
		uniqueHomes = [];

	positionArray.push(currentPosition);

	for (ia = 0; ia < movementData.length; ia++ ) {
		
		if (movementData[ia] === '^') {
			currentPosition = moveNorth(currentPosition);
			positionArray.push((currentPosition.toString()));
		}

		else if (movementData[ia] === 'v' ) {
			currentPosition = moveSouth(currentPosition);
			positionArray.push((currentPosition.toString()));
		}

		else if (movementData[ia] === '>' ) {
			currentPosition = moveEast(currentPosition);
			positionArray.push((currentPosition.toString()));
		}

		else if (movementData[ia] === '<' ) {
			currentPosition = moveWest(currentPosition);
			positionArray.push((currentPosition.toString()));
		}

	};

	for (ib = 0; ib < positionArray.length; ib++ ) {
		if (uniqueHomes.indexOf(positionArray[ib]) === -1 ) {
			uniqueHomes.push(positionArray[ib]);
		}
	}
	
	console.log(uniqueHomes.length);

};



// Two Santas //
function parseCoordinateData2(movementData, startingLocation) {
	let santaPosition = startingLocation;
	let robotPosition = startingLocation;

	let santaArray = [],
		robotArray = [],
		uniqueArray = [];

	santaArray.push(santaPosition);
	robotArray.push(robotPosition);



	for (ia = 0; ia < movementData.length; ia++ ) {
		if (movementData[ia] === '^') {
			
			if (isEven(ia)) {
				santaPosition = moveNorth(santaPosition);
				santaArray.push((santaPosition.toString()));
			}

			else if (isOdd(ia)) {
				robotPosition = moveNorth(robotPosition);
				robotArray.push((robotPosition.toString()));
			}

		}

		else if (movementData[ia] === 'v' ) {
			
			if (isEven(ia)) {
				santaPosition = moveSouth(santaPosition);
				santaArray.push((santaPosition.toString()));
			}

			else if (isOdd(ia)) {
				robotPosition = moveSouth(robotPosition);
				robotArray.push((robotPosition.toString()));
			}

		}

		else if (movementData[ia] === '>' ) {
			
			if (isEven(ia)) {
				santaPosition = moveEast(santaPosition);
				santaArray.push((santaPosition.toString()));
			}

			else if (isOdd(ia)) {
				robotPosition = moveEast(robotPosition);
				robotArray.push((robotPosition.toString()));
			}

		}

		else if (movementData[ia] === '<' ) {
			
			if (isEven(ia)) {
				santaPosition = moveWest(santaPosition);
				santaArray.push((santaPosition.toString()));
			}

			else if (isOdd(ia)) {
				robotPosition = moveWest(robotPosition);
				robotArray.push((robotPosition.toString()));
			}

		}

	};

	// Santa
	for (ib = 0; ib < santaArray.length; ib++ ) {
		if (uniqueArray.indexOf(santaArray[ib]) === -1 ) {
			uniqueArray.push(santaArray[ib]);
		}
	}
	// Robot
	for (ib = 0; ib < robotArray.length; ib++ ) {
		if (uniqueArray.indexOf(robotArray[ib]) === -1 ) {
			uniqueArray.push(robotArray[ib]);
		}
	}
	console.log(uniqueArray.length);

};

parseCoordinateData2(data, startingLocation);