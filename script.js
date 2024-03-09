const grid = document.querySelector('.grid');
const gridContainer = document.createElement('div');
gridContainer.className = 'container';

function createStartingGrid() {

    for(let i = 0; i < 16*16; i++) {
        let startingBox = document.createElement('div');
        startingBox.className = 'grid-box';
        gridContainer.appendChild(startingBox);
        startingBox.style.width = '45px';
        startingBox.style.height = '45px';
    }
    grid.appendChild(gridContainer);
    
}

gridContainer.addEventListener('mouseover', (ev) => {
    if(ev.target.classList.contains('grid-box')) {
        ev.target.style.backgroundColor = `rgb(${createRandomRGB()})`;
    }
})

function createGrid(count) {

    const length = (760/count) - 2.5;

    for(let i = 0; i < count*count; i++) {
        let box = document.createElement('div');
        box.className = 'grid-box';
        gridContainer.appendChild(box);
        box.style.width = `${length}px`;
        box.style.height = `${length}px`;
    }
    grid.appendChild(gridContainer);
}

function promptForValue() {
    gridContainer.innerHTML = '';
    let noOfGridsPerSide = prompt('Enter number of grids per side.\n(Not more than 100)');
    createGrid(noOfGridsPerSide);
}

function createRandomRGB() {
    let red, green, blue;

    red = Math.round(Math.random() * 225);
    green = Math.round(Math.random() * 225);
    blue = Math.round(Math.random() * 225);

    return `${red}, ${green}, ${blue}`;
}

createStartingGrid();