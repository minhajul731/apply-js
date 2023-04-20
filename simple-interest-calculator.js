function simpleInterestCalculator(principal, rate, time) {
    let calculatedRate = rate / 100;
    let calculatedInterest = principal * (1 + (calculatedRate * time));
    return calculatedInterest;
}

let myPricipal = 10000;
let myRate = 3.875;
let time = 5;
const simpleInterest = simpleInterestCalculator(myPricipal, myRate, time);
console.log(simpleInterest.toFixed(2));