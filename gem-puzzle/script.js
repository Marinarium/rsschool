'use strict'
const FRAME = document.querySelector('.frame');
const BTN_CHANGE = document.querySelector('.btn-change');
const TITLE_SIZE = 100;
const PUZZLE_DIMENSION = 4;
const PUZZLE_NUMBERS = 15;
const EMPTY_TILE = {
    value: 0,
    top: 0,
    left: 0
}
const tiles = [];
tiles.push(EMPTY_TILE);

function createRandomNumbers() {
    let numbers = [...Array(PUZZLE_NUMBERS).keys()].map(x => x + 1).sort(() => Math.random() - 0.5);
    return numbers;
}

function moveTile(tilePosition) {
    const tile = tiles[tilePosition];

    //check opportunity to move a tile
    const differenceLeft = Math.abs(EMPTY_TILE.left - tile.left);
    const differenceTop = Math.abs(EMPTY_TILE.top - tile.top);

    if (differenceLeft + differenceTop > 1) {
        return;
    }

    //set coordinates for the empty tile to swap the empty tile and chosen tile
    tile.elem.style.left = `${EMPTY_TILE.left * TITLE_SIZE}px`;
    tile.elem.style.top = `${EMPTY_TILE.top * TITLE_SIZE}px`;

    const tempLeft = EMPTY_TILE.left;
    const tempTop = EMPTY_TILE.top;

    EMPTY_TILE.left = tile.left;
    EMPTY_TILE.top = tile.top;

    tile.left = tempLeft;
    tile.top = tempTop;

    const isFinished = tiles.every(tile => {
        return tile.value === tile.top * PUZZLE_DIMENSION  + tile.left;
    });

    if (isFinished) {
        alert("win!");
    }
}

//initial structure
for (let i = 1; i <= PUZZLE_NUMBERS; i++) {
    createRandomNumbers();
    const tile = document.createElement('div');
    let valueOfTile = numbers[i - 1];
    tile.className = 'tile';
    tile.innerHTML = valueOfTile;

    const left = i % PUZZLE_DIMENSION ;
    const top = (i - left) / PUZZLE_DIMENSION ;

    tiles.push({
        value: valueOfTile,
        left: left,
        top: top,
        elem: tile
    });

    tile.style.left = `${left * TITLE_SIZE}px`;
    tile.style.top = `${top * TITLE_SIZE}px`;

    FRAME.append(tile);

    FRAME.addEventListener('click', () => {
        if(event.target !== tile) {
            return;
        }
        moveTile(i);
    });
}

function changePuzzle() {
    let tileElements = document.querySelectorAll('.tile');
    createRandomNumbers();

    function changeNumber(tileElement, number) {
        tileElement.innerHTML = number;
    }

    for (let i = 0; i < tileElements.length; i++) {
        changeNumber(tileElements[i], numbers[i]);
    }
}

BTN_CHANGE.addEventListener('click', changePuzzle);