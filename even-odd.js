// even number
function getNumber(number) {
    if (number % 2 == 0) {
        console.log('It is a even Number');
    }
    else {
        console.log('It is a Odd Number');
    }
}

const myNumber = 3;
const result = getNumber(myNumber);


// even odd another method
// function getNumber(number) {
//     if (number % 2 == 0) {
//         return true
//     }
//     return false;
// }

// const myNumber = 3;
// const result = getNumber(myNumber);
// console.log(result);