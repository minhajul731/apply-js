function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        // console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}

let giveFactorialNumber = 10;
let factorialResult = getFactorial(giveFactorialNumber);
console.log(giveFactorialNumber + '! factorial is = ', factorialResult);

