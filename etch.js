const container = document.querySelector('.container')


for (i=0; i<16**2; i++) {
let pixel = document.createElement('div')
pixel.classList.add('pixel')
pixel.style = "width: 100% ; height: 100% ; background-color: blue"
container.appendChild(pixel)
}

container.style = `grid-template-columns: repeat(${16}, 1fr) ; gap: 5px`;

pixel.addEventListener('mouseover', function() {pixel.style = "background-color: red"})