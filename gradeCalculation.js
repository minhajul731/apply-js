function getExamNumber(number) {
    if (number <= 100 && number >= 90) {
        console.log("You got A+");
    }
    else if (number <= 90 && number >= 80) {
        console.log("You got A");
    }
    else if (number <= 80 && number >= 70) {
        console.log("You got A-");
    }
    else if (number <= 70 && number >= 60) {
        console.log("You got B");
    }
    else if (number <= 60 && number >= 50) {
        console.log("You got C");
    }
    else if (number <= 50 && number >= 40) {
        console.log("You got D");
    }
    else if (number <= 40 && number >= 33) {
        console.log("You Have Passed");
    }
    else {
        console.log('You Failed, Try Again');
    }
}

let examNumber = 93;
const grade = getExamNumber(examNumber);