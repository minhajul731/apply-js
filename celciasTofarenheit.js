function celciousToFarenheit(celcious) {
    let farenheit = (celcious * (9 / 5)) + 32;
    return farenheit;
}

let myCelsious = 10;
const myFarenheit = celciousToFarenheit(myCelsious);
console.log('Todays Tempurature is ', myFarenheit, 'Farenheit');