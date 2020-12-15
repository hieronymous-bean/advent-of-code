// Day 1 Puzzle Solution //
var data = [];

// Check for Two Values in Array //
function processTwoValues(payloadA,payloadB) {
	for (let ia = payloadA.length - 1; ia >= 0; ia--) {
		var valueA = payloadA[ia];

		for (let ib = payloadB.length - 1; ib >= 0; ib--) {
			var valueB = payloadB[ib];
			if (valueA + valueB == 2020) {
				console.log('A: ' + valueA + '& B: ' + valueB);
			}

		}

	}
};


// Check for Three Values in Array //
function processThreeValues(payloadA,payloadB, payloadC) {
	for (let ia = payloadA.length - 1; ia >= 0; ia--) {
		var valueA = payloadA[ia];

		for (let ib = payloadB.length - 1; ib >= 0; ib--) {
			var valueB = payloadB[ib];
			
			for (let ic = payloadC.length - 1; ic >= 0; ic--) {
				var valueC = payloadC[ic];

				if (valueA + valueB + valueC == 2020) {
					console.log('A: ' + valueA + '& B: ' + valueB + '& C:' + valueC);
				}

			}

		}

	}
};