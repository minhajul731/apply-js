function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}

var myInces = inchToFeet(145);
console.log(myInces.toFixed(4));