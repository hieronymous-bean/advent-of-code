var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../data/Day2.txt");

var passwordRow = data.split('\n');
var countYes = 0;
var iterations = 0;

function isValidOne(item) {
	var passwordObject = item.split(':');
	var password = passwordObject[1].replace(/ /g, "");
	var ruleLow = passwordObject[0].split(' ')[0].split('-')[0];
	var ruleHigh = passwordObject[0].split(' ')[0].split('-')[1];
	var letter = passwordObject[0].split(' ')[1];
	var letterReg = new RegExp(letter, "g");
	let found = password.match(letterReg);

	if (found && found.length >= ruleLow && found.length <= ruleHigh) {
		return 'match';
	}
	else { return; }
}

function isValidTwo(item) {
	var passwordObject = item.split(':');
	var password = passwordObject[1].replace(/ /g, "");
	var ruleLow = passwordObject[0].split(' ')[0].split('-')[0];
	var ruleHigh = passwordObject[0].split(' ')[0].split('-')[1];
	var letter = passwordObject[0].split(' ')[1];
    var indexes = [];

    for (i = 0; i < password.length; i++) {
    	if (password[i] == letter) {
            indexes.push(i+1);
        }

    }

    var found1 = indexes.find(element => element == ruleLow);
    var found2 = indexes.find(element => element == ruleHigh);

    if (found1 && !found2) {
    	return 'match';
    } else if (!found1 && found2) {
    	return 'match';
    }

    
    /*
    for (i = 0; i < indexes.length; i++) {

    	if ((indexes[i] == ruleLow) && (indexes[i] != ruleHigh)) {

    			console.log('\n\nchecking: ' + (indexes[i]) + '\nRule Low: ' + ruleLow + '\nRule High: ' + ruleHigh)
    			console.log('\nobject: ' + passwordObject + '\npassword: ' + password + '\nrule: ' + ruleLow + '-' + ruleHigh + '\nletter: ' + letter + '\nindexes: '+ indexes);
    			return 'match';
    			break;

    	}

    }
    */

}


passwordRow.forEach(function(item) {
	iterations++;
	var check = isValidTwo(item);

	if (check == 'match') {
		countYes++;
		return;
	}

});

console.log(countYes);
console.log(iterations);

/*
isValidTwo('2-6 h: hhhfhh');
*/