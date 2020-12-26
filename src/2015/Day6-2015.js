var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day6-2015.txt");
var listRows = data.split('\n');

function applyLightingConfig(input) {

    function findLightsArea(A, B, C, D) {
        return ((C + 1) - A) * ((D + 1) - B);
    };

    let lightsOn = 0;
    let lightsOff = 0;

    function turnLightsOn(input) {
        let parsed = input.split(' ');
        let firstPair = parsed[2];
        let secondPair = parsed[4];
        let A = firstPair.split(',')[0],
            B = firstPair.split(',')[1],
            C = secondPair.split(',')[0],
            D = secondPair.split(',')[1];

        console.log('Lights Area: ',findLightsArea(A, B, C, D));

    };

    function turnLightsOff(input) {

    };

    function toggleLights(input) {

    };

    for ( ia = 0; ia < input.length; ia++ ) {
        console.log(input[ia].substring(0, 5));
        if (input[ia].substring(0,7) == 'turn on') {
            console.log('turn on');
            turnLightsOn(input[ia]);
        }
        else if (input[ia].substring(0, 8) == 'turn off') {
            console.log('turn off');
            turnLightsOff(input[ia]);
        }
        else if (input[ia].substring(0, 6) == 'toggle') {
            console.log('toggle');
            toggleLights(input[ia]);
        };
    };

}

applyLightingConfig(listRows);

// console.log(listRows[0]);