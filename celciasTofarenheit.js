// celciousToFarenheit
function celciousToFarenheit(celcious) {
    let farenheit = (celcious * (9 / 5)) + 32;
    return farenheit;
}

let myCelsious = 10;
const farenheit = celciousToFarenheit(myCelsious);
console.log('Todays Tempurature is ', farenheit, 'Farenheit');

// FarenheitToCelcious
function farenheitToCelcious(farenheit) {
    let celcious = ((farenheit - 32) * 5) / 9;
    return celcious;
}

let myFarenheit = 50;
const myCelcious = farenheitToCelcious(myFarenheit);
console.log('Todays Tempurature is ', myCelcious, 'celcious');