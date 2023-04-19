// leap year
// function leapYear(year) {
//     if (year % 400 == 0) {
//         return true;
//     }
//     else if (year % 100 == 0) {
//         return true;
//     }
//     else if (year % 4 == 0) {
//         return true;
//     }
//     return false;
// }

// let myYear = 2024;
// let result = leapYear(myYear);
// console.log('My year is leapyear', result);

// another way
function leapYear(year) {
    if (((year % 100 == 0) && (year % 4 == 0)) || (year % 400 == 0)) {
        console.log('It is a Leap Year');
        return true;
    }
    else {
        console.log('It is not a Leap Year');
        return false;
    }
}

let myYear = 2000;
let result = leapYear(myYear);
console.log('My year is leapyear', result);