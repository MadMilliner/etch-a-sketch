let etch = document.querySelector('.etch');
let resetBtn = document.querySelector('.reset');

function startingBoard(num) {
    etch.innerHTML = '';
      
    for (let i = 0; i < num; i++) {
        let box = document.createElement("div");
        box.classList.add('box');
       // Add click event to change color (etch-a-sketch effect)
        box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#333';
        });
    etch.appendChild(box);
}}

resetBtn.addEventListener('click', function() {
    startingBoard(16);
})

startingBoard(16);