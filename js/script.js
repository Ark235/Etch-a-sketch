createSingleSquare();

/** Add single square to drawing field */

function createSingleSquare() {
    const container = document.querySelector('.drawing-field');
    const singleSquare = document.createElement('div');
    singleSquare.setAttribute('style', 'width: 20px; height: 20px; box-sizing: border-box; border: 1px solid blue;');
    container.appendChild(singleSquare);
}