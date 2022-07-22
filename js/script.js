addSquares16();

//** Control buttons */

const clearBtn = document.querySelector('.clear');
const multicolorBtn = document.querySelector('.multicolor');
const monochromeBtn = document.querySelector('.monochrome');

//** Add single square 20px*20px to drawing field */

function createSingleSquare() {
    const container = document.querySelector('.drawing-field');
    const singleSquare = document.createElement('div');
    singleSquare.setAttribute('style', 'width: 20px; height: 20px; box-sizing: border-box; border: 1px solid rgba(8, 7, 7, 0.2);');
    container.appendChild(singleSquare);
}

//** Fill drawing field 16x16 with squares 20px*20px */

function addSquares16() {
    for (let i = 0; i < 256; i++) {
        createSingleSquare();
    }
}
