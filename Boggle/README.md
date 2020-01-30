# Boggle

This game of Boggle loads a board of 16 x 16 randomly generated letters. On load,
it initializes a three minute timer and when the time runs out, the user is prompted
a message declaring that the time ran out and the amount of words they formed.
This game uses HTML, CSS, and JS.

## How To Run The Code

Literally, just open it in the browser.

### Randomized Letters

This code creates a function called "rando" and takes the length as an argument.
Initially, I added the original alphabet but upon user testing it and realizing
that it is very difficult to form words with no vowels, I decided to just put more
vowels into the characters array. Then it was like *oops* I also have to account for
"Qu". So I made the characters into another variable called charactersArray and
concatted it in there.
```
function rando(length){
    let tiles = [];
    let characters = 'AABCDEEFGHIIJKLMNOOPRSTUVWXYZ';
    let charactersArray = characters.split('').concat(['Qu'])
    for (let i = 0 ; i < length; i++){
        tiles.push(charactersArray[Math.floor(Math.random() * charactersArray.length)]);
    }
    return tiles;
}
```

Randomized Letter but like On The Board. OK so there are 16 lil boxes and I named
those tiles. Because there are 16 tiles, you use 16. 

```
let tiles = rando(16)
for (let i = 0; i < tiles.length; i++){
    let row = Math.floor(i / 4) + 1;
    let column = i % 4 + 1;
    let square = document.querySelector(".board section:nth-child(" + row + ") .letter:nth-child(" + column + ")");
    square.innerHTML = tiles[i];
}
```

### Timer

So, the timer is created with JS. I made the time set to 3 minutes and it starts
counting down as soon as the page loads. The minutes and seconds are split by a ":".
If the seconds are about to be less than 0, they restart to 59 seconds and a minute
has passed by so the minute is subtracted by 1. the formattedSecconds is basically
in response to seeing only one 0 appear after the seconds return single digits
(aka, under 10). Afterwards I wanted something to let the user know that the time
is up so I did an alert and connected the amount of words a user was able to
get. The amount of words is found by using wordsFound.length, which is in the
next section.

```
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
       let wordsFound = document.querySelectorAll('.sidebar .word');
       alert('Times up! You found ' + wordsFound.length + " words!")
   }
   else {
       setTimeout(startTimer, 1000);
   }
}
```


### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Built With

* JavaScript
* HTML
* CSS

## Acknowledgments

* This was hard
* I need to strengthen my JS skills
* hello darkness my old friend
