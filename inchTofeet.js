// inch to feet
function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

var myInces = inchToFeet(145);
console.log(myInces.toFixed(4));

// miles to kilometer
function milesToKiloMeter(miles) {
    let kiloMeter = miles * 1.60934;
    return kiloMeter;
}

var givenMiles = 120;
var getKiloMeter = milesToKiloMeter(givenMiles);
console.log('Kilometer: ', getKiloMeter.toFixed(2));