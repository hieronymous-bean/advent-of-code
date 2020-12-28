var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var data = require("../../data/2015/Day6-2015.txt");
var listRows = data.split('\n');

function applyLightingConfig(input) {

    function findLightsArea(A, B, C, D) {
        return ((C - A) + 1) * ((D - B) + 1);
    };

    let lightsOn = 0;
    let lightsOnArray = [];
    let lightsOff = 0;
    let lightsOffArray = [];

    function turnLightsOn(input) {
        let parsed = input.split(' ');
        let firstPair = parsed[2];
        let secondPair = parsed[4];
        let A = firstPair.split(',')[0],
            B = firstPair.split(',')[1],
            C = secondPair.split(',')[0],
            D = secondPair.split(',')[1];

        lights = findLightsArea(A, B, C, D);
        lightsOn = lightsOn + lights;
    };

    function turnLightsOff(input) {
        let parsed = input.split(' ');
        let firstPair = parsed[2];
        let secondPair = parsed[4];
        let A = firstPair.split(',')[0],
            B = firstPair.split(',')[1],
            C = secondPair.split(',')[0],
            D = secondPair.split(',')[1];

        lights = findLightsArea(A, B, C, D);
        lightsOn = lightsOn + lights;
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