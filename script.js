let etch = document.querySelector('.etch');
let resetBtn = document.querySelector('.reset');

function startingBoard(num) {
    // Clear existing boxes
    etch.innerHTML = '';
    
    // Calculate grid size (square root for square grid)
    let gridSize = Math.sqrt(num);
    
    // Calculate box dimensions as percentages
    let boxWidth = 100 / gridSize;
    let boxHeight = 100 / gridSize;
    
    // Create num boxes
    for (let i = 0; i < num; i++) {
        let box = document.createElement("div");
        box.classList.add('box');
        
        // Set flexible dimensions
        box.style.width = `calc(${boxWidth}% - 2px)`;
        box.style.height = `calc(${boxHeight}% - 2px)`;
        
        // Add click event to change color (etch-a-sketch effect)
        box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#333';
        });
        
        etch.appendChild(box);
    }
}

// Reset functionality
resetBtn.addEventListener('click', function() {
    startingBoard(16);
});

// Test different grid sizes
document.addEventListener('keydown', function(e) {
    if (e.key === '1') startingBoard(16);  // 4x4
    if (e.key === '2') startingBoard(64);  // 8x8
    if (e.key === '3') startingBoard(100); // 10x10
    if (e.key === '4') startingBoard(256); // 16x16
});

// Initialize the board
startingBoard(16);