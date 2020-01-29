//The Random Letter Generator

function rando(length){
    let tile = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0 ; i < length; i++){
        tile = tile + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return tile;
}
let tiles = rando(16)
    for (let i = 0; i < tiles.length; i++){
        let row = Math.floor(i % 4);
        let column = Math.floor(i % 4);
        let square = document.getQuerySelector(".board" > div:nth child(" + row + ") >
        div:nth child(" + column + ")");
        square.innerHTML = tiles[i];
    }
// console.log(rando(1));

//on click the tile changes color
