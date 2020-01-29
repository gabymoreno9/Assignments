//The Random Letter Generator

function rando(length){
    let tiles = [];
    let characters = 'AABCDEEFGHIIJKLMNOOPRSTUUVWXYZ';
    let charactersArray = characters.split('').concat(['Qu'])
    for (let i = 0 ; i < length; i++){
        tiles.push(charactersArray[Math.floor(Math.random() * charactersArray.length)]);
    }
    return tiles;
}

let tiles = rando(16)
for (let i = 0; i < tiles.length; i++){
    let row = Math.floor(i / 4) + 1;
    let column = i % 4 + 1;
    let square = document.querySelector(".board section:nth-child(" + row + ") .letter:nth-child(" + column + ")");
    square.innerHTML = tiles[i];
}
// console.log(rando(1));

//on click the tile changes color

document.getElementById('timer').innerHTML = "3:00"
startTimer();

function startTimer() {
    let currentTime = document.getElementById('timer').innerHTML;
    let timeArray = currentTime.split(":")
    let minutes = timeArray[0];
    let seconds = timeArray[1] - 1;

    if (seconds < 0) {
        seconds = 59;
        minutes = minutes - 1;
    }

    let formattedSeconds = seconds;
    if (seconds < 10 && seconds >= 0) {
        formattedSeconds = "0" + seconds;
    }
    document.getElementById('timer').innerHTML = minutes + ":" + formattedSeconds;

   if (minutes == 0 && seconds == 0) {
       alert('Times up now biatch!')
   }
   else {
       setTimeout(startTimer, 1000);
   }
}
