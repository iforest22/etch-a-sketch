const container = document.querySelector('.container')
container.style = `grid-template-columns: repeat(${16}, 1fr) ; gap: 1px`;

function createGrid(size) {
    for (i = 0; i < size ** 2; i++) {
        let pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.style = "width: 100% ; height: 100% ; background-color: blue"
        container.appendChild(pixel)
    }
}

createGrid(16)

function addHighlighting() {
    let pixels = document.querySelectorAll('.container div')
    for (const pixel of pixels) {
        pixel.addEventListener('mouseover', function () { pixel.style = "background-color: red" })
    }
}

addHighlighting()

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function newRound() {
    let newNumber = parseInt(prompt("enter a new grid length no larger than 100"))
    console.log(typeof newNumber)
    if ((typeof newNumber !== "number") || newNumber > 100) {return alert('try again')}
    removeAllChildNodes(container)
    createGrid(newNumber)
    addHighlighting()
    container.style = `grid-template-columns: repeat(${newNumber}, 1fr) ; gap: 1px`;
}

let reset = document.querySelector(".reset")
reset.addEventListener('click', newRound)
