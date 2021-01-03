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
    let valueArray = [];

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
                let onValue = [iOnA, iOnB, true];
                if (lightsArray.indexOf[[iOnA,iOnB,true]] != -1) {
                    let foundIndex = lightsArray.indexOf[[iOnA,iOnB,true]];
                    valueArray[foundIndex] = [iOnA,iOnB,true];
                    
                } 
                else if (lightsArray.indexOf[[iOnA,iOnB,false]] != -1) {
                    let foundIndex = lightsArray.indexOf[[iOnA,iOnB,false]];
                    valueArray[foundIndex] = [iOnA,iOnB,true];
                }
                else {
                    lightsArray.push([iOnA,iOnB]);
                    valueArray.push([iOnA,iOnB,true])
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