const grid = document.querySelector('.grid');

function createStartingGrid() {    

    for(let i=0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.margin = '.09px';
        for(let j=0; j < 16; j++) {
            const col = document.createElement('div');
            col.classList.add('grid-col');
            col.style.width = '45px';
            col.style.height = '45px';

            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

grid.addEventListener('mouseover', (ev) => {
    if(ev.target.classList.contains('grid-col')) {
        ev.target.style.backgroundColor = `rgb(${createRandomRGB()})`;
    }
})

function createGrid(count) {

    const length = (760/count) - 2.5;

    for(let i=0; i < count; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.height = '100%';
        row.style.width = `${length}px`;

        for(let j=0; j < count; j++) {
            const col = document.createElement('div');
            col.classList.add('grid-col');
            col.style.width = `${length}px`;
            col.style.height = `${length}px`;

            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function promptForValue() {
    grid.innerHTML = '';
    let noOfGridsPerSide = prompt('Enter number of grids per side.\n(1 - 100)');
    if(!isNaN(parseFloat(noOfGridsPerSide)) 
        && isFinite(noOfGridsPerSide)) {
        if(noOfGridsPerSide <= 100) {
            if(noOfGridsPerSide > 0) {
                createGrid(noOfGridsPerSide);
            } else {
                promptForValue();
            }
        } else {
            promptForValue();
        }
    } else {
        promptForValue();
    }
}

function createRandomRGB() {
    let red, green, blue;

    red = Math.round(Math.random() * 225);
    green = Math.round(Math.random() * 225);
    blue = Math.round(Math.random() * 225);

    return `${red}, ${green}, ${blue}`;
}

createStartingGrid();

function changeButtonColor() {
    const btn = document.querySelector('button');
    btn.addEventListener('mousemove', () => {
        btn.style.backgroundColor = `rgb(${createRandomRGB()})`;
    })
}

changeButtonColor()