addSquares16();

//** Control buttons */

const clearBtn = document.querySelector('.clear');
const gridBtn = document.querySelector('.toggle-grid');
const multicolorBtn = document.querySelector('.multicolor');
const monochromeBtn = document.querySelector('.monochrome');

//** Grid toggle button */

gridBtn.addEventListener('click', () => {
    toggleBorders();
});

//** Clear field button */

clearBtn.addEventListener('click', () => {
    clearField();
});

//** Add single square 20px*20px to drawing field */

function createSingleSquare() {
    const container = document.querySelector('.drawing-field');
    const singleSquare = document.createElement('div');
    singleSquare.setAttribute('style', 'width: 20px; height: 20px; box-sizing: border-box;');
    mouseoverEvent(singleSquare);
    singleSquare.setAttribute('class', 'drawing-field-element grid-on');
    container.appendChild(singleSquare);
}

//** Fill drawing field 16x16 with squares 20px*20px */

function addSquares16() {
    for (let i = 0; i < 256; i++) {
        createSingleSquare();
    }
}

//** Toggle square's borders */

function toggleBorders() {
    const squares = document.querySelectorAll('.drawing-field-element');
    squares.forEach(element => {
        element.classList.toggle('grid-on');
    });
}

//** Clear field (color all squares white) */

function clearField() {
    const squares = document.querySelectorAll('.drawing-field-element');
    squares.forEach(element => {
        element.classList.remove('color-square');
    });
}

//** Add mouseover event listener to an element (square), which add a style with new color to this element */

function mouseoverEvent(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('color-square');
    });
}