let fieldSize = document.querySelector('.field-size-value').value;

addSquares();

//** Drawing mode variables */

const monochromeMode = 1;
const multicolorMode = 2;

let currentMode;

//** Control buttons */

const clearBtn = document.querySelector('.clear');
const gridBtn = document.querySelector('.toggle-grid');
const multicolorBtn = document.querySelector('.multicolor');
const monochromeBtn = document.querySelector('.monochrome');
const fieldSizeSetBtn = document.querySelector('.field-size-set');

//** Grid toggle button */

gridBtn.addEventListener('click', () => {
    toggleBorders();
});

//** Clear field button */

clearBtn.addEventListener('click', () => {
    clearField();
});

//** Field size set button */

fieldSizeSetBtn.addEventListener('click', () => {
    removeSquares();
    fieldSize = document.querySelector('.field-size-value').value;    
    if (fieldSize > 64) {
        alert('Max grid size is 64*64');
    } else 
    addSquares();
});

//** Add single square to drawing field */

function createSingleSquare() {
    const container = document.querySelector('.drawing-field');
    const singleSquare = document.createElement('div');
    singleSquare.setAttribute('style', `width: ${squareSize()}px; height: ${squareSize()}px; box-sizing: border-box;`);
    mouseoverEvent(singleSquare);
    singleSquare.setAttribute('class', 'drawing-field-element grid-on');
    container.appendChild(singleSquare);
}

//** Fill drawing field with squares  */

function addSquares() {
    for (let i = 0; i < fieldSize * fieldSize; i++) {
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

//** Add event listener to an element (square), which add a class with new color to this element */

function mouseoverEvent(element) {
    element.addEventListener('mouseover', (e) => {
        element.classList.add('color-square');
    });
}

//** Calculate square size using 'field size' and container width input data */

function squareSize() {
    let squareSize = document.querySelector('.field-size-value').value;
    let field = document.querySelector('.drawing-field');
    let fieldWidth = field.offsetWidth;
    let newSquareSize = (fieldWidth - 2) / squareSize;
    return newSquareSize;
}

//** Remove current field elements */

function removeSquares() {
    for (let i = 0; i < fieldSize * fieldSize; i++) {
        let elementToRemove = document.querySelector('.drawing-field-element');
        elementToRemove.remove();
    }
}