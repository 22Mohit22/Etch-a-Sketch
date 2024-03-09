const grid = document.querySelector('.grid');
const gridContainer = document.createElement('div');
gridContainer.className = 'container';

function createStartingGrid() {

    for(let i = 0; i < 16*16; i++) {
        const startingBox = document.createElement('div');
        startingBox.className = 'grid-box';
        gridContainer.appendChild(startingBox);
        startingBox.style.width = '45px';
        startingBox.style.height = '45px';
    }
    grid.appendChild(gridContainer);
    
}


createStartingGrid();
