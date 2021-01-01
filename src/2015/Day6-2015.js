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
    let lightsArray = [];
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
        
        for (iOnA = A; iOnA <= C; iOnA++) {

            for (iOnB = B; iOnB <= D; iOnB++) {

                if (lightsArray.indexOf[{'X': iOnA, 'Y': iOnB, 'Status': 'On'}] != -1) {
                    lightsArray.push({'X': iOnA, 'Y': iOnB, 'Status': 'On'});
                }

            }

        }
        
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

        for (iOffA = A; iOffA <= C; iOffA++) {

            for (iOffB = B; iOffB <= D; iOffB++) {

                if (lightsArray.indexOf[{'X': iOffA, 'Y': iOffB, 'Status': 'Off'}] != -1) {
                    lightsArray.push({'X': iOffA, 'Y': iOffB, 'Status': 'Off'});
                }

            }

        }
    };

    function toggleLights(input) {

    };

    for ( ia = 0; ia < input.length; ia++ ) {
        if (input[ia].substring(0,7) == 'turn on') {
            turnLightsOn(input[ia]);  
        }
        else if (input[ia].substring(0, 8) == 'turn off') {
            turnLightsOff(input[ia]);
        }
        else if (input[ia].substring(0, 6) == 'toggle') {
            toggleLights(input[ia]);
        };
    };

    console.log(lightsArray.length);
}

applyLightingConfig(listRows);