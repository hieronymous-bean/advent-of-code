var md5 = require('md5');

function checker(input) {
	var ia = 0;

	while (md5(input + ia).substring(0, 6) != '000000') {
		ia++;
	}

	console.log('The answer is ', ia);

}

checker('bgvyzdsv');