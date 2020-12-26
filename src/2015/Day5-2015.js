var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day5-2015.txt");
var listRows = data.split('\r\n');

function isNicePart1(input) {

	function containsVowels(input) {

		let inputString = input;
		let vowelArray = ['a','e','i','o','u'];
		let vowelCount = 0;

		for ( ia = 0; ia < inputString.length; ia++ ) {

			if ( vowelArray.indexOf(inputString[ia]) != -1 ) {

				vowelCount++;

			};

		};

		if (vowelCount > 2) {
			return true;
		} else {
			return false;
		};

	}

	function hasTwoInARow(input) {
		let inputString = input;
		for ( ib = 0; ib < inputString.length; ib++ ) {

			if ( inputString[ib] == inputString[ib + 1] ) {
				
				return true;

			};

		};

		return false;

	};

	function hasNaughtyStrings(input) {
		let inputString = input;
		let naughtyStrings = ['ab','cd','pq','xy'];

		for ( ic = 0; ic < inputString.length; ic++ ) {

			if (inputString.indexOf(naughtyStrings[ic]) != -1 ) {
				return true;
			}

		}

		return false;

	};

	let niceCount = 0;

	for (ix = 0; ix < input.length; ix++ ) {

		vowels = containsVowels(input[ix]);
		repeats = hasTwoInARow(input[ix]);
		words = hasNaughtyStrings(input[ix]);

		// console.log('Vowels: ', vowels, ' Repeats: ', repeats, ' Words: ', words);

		if ( vowels && repeats && !words ) {
			niceCount++;
		}

	};

	console.log(niceCount);

}

function hasTwoPairs(input) {
		let inputString = input;
		let pairCounts = 0;

		for ( id = 0; id < inputString.length; id++ ) {
            var currentPair = inputString[id] + inputString[id + 1];
            var stringFromPair = inputString.slice(id + 2);

            if (stringFromPair.indexOf(currentPair) != -1 ) {
                console.log(currentPair, id);
                return true;
            }

		};

		return false;

	};

	function hasSplitPair(input) {
        let inputString = input;
        let splitString = '';
        let splitRepeats = 0;
        
		for ( ic = 0; ic < inputString.length; ic++ ) {

			if ( inputString[ic] == inputString[ic+2] ) {

                splitString = inputString.substring(ic, ic+3);
                
                return true;

			}

		}

		return false;

    };

function isNicePart2(input) {
    console.log(input[1]);
	

    let niceCount = 0;

	for (ix = 0; ix < input.length; ix++ ) {
        
        repeats = hasSplitPair(input[ix]);
        console.log(repeats);
		pairs = hasTwoPairs(input[ix]);
		
		if ( pairs && repeats) {
			niceCount++;
		}

	};

	console.log(niceCount);

}
    

    isNicePart1(listRows);