function createCanvas() {
  const size = Number(prompt("Choose canvas side length (1-100):"));
  if (!(size >= 1 && size <= 100)) {
    alert("Invalid value");
    return;
  }

  const area = size ** 2;
  const drawingArea = document.querySelector('#drawingArea');

  for (let i = 1; i <= area; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    drawingArea.appendChild(pixel);
    console.log(`div ${i} created`);
  }
}

const button = document.querySelector('button#sizeSet');
button.addEventListener('click', createCanvas);