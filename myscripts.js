const grid = document.getElementById('grid');

function createGrid(dimension) {
    const GRID_MAX = 960;
    const cellSize = (GRID_MAX / dimension);
    console.log('Cell size should be: ' + cellSize);
    console.log(typeof cellSize);

    for( let i = 0; i < dimension; i++){
        const rowContainer = document.createElement('div');
        rowContainer.className = "row";

        for( let j = 0; j < dimension; j++){
            const cell = document.createElement('div');
            cell.className = "cell";
                                console.log(cellSize);
            cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px`;
            cell.addEventListener('mouseenter', () => {
                cell.className = "marked";
                cell.onmousemove = "null";
            });
            rowContainer.appendChild(cell);
        }
        grid.appendChild(rowContainer);
    }
}

createGrid(16);

const resetBtn = document.getElementById('resetGrid');
resetBtn.addEventListener('click', () => {
    console.log("button was clicked");
    clearGrid();
    
    let dimension = prompt("What number of squares per side? (Choose 1-100)");
    while(dimension === 0 || dimension > 100){
        dimension = prompt("What number of squares per side? (Choose 1-100)");
    }
    
    createGrid(dimension);
});

function clearGrid(){
    grid.innerHTML = '';
}
