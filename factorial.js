// factorial using for loop

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        // console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}

let giveFactorialNumber = 3;
let factorialResult = getFactorial(giveFactorialNumber);
console.log(giveFactorialNumber + '! factorial is = ', factorialResult);


// factorial using while loop
/*
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        // console.log(i);
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let giveFactorialNumber = 3;
let factorialResult = getFactorial(giveFactorialNumber);
console.log(giveFactorialNumber + '! factorial is = ', factorialResult);
*/

// factorial using for loop decrement
/*
function getFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}

let giveFactorialNumber = 3;
let factorialResult = getFactorial(giveFactorialNumber);
console.log(giveFactorialNumber + '! factorial is = ', factorialResult);
*/

// factorial using while loop decrement
/* 
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        console.log(i);
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let giveFactorialNumber = 3;
let factorialResult = getFactorial(giveFactorialNumber);
console.log(giveFactorialNumber + '! factorial is = ', factorialResult);
*/


