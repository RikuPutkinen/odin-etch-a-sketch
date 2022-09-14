function createCanvas() {
  const size = Number(prompt("Choose canvas side length (1-100):"));
  if (!(size >= 1 && size <= 100)) {
    alert("Invalid value");
    return;
  }

  const area = size ** 2;
  
  const drawingArea = document.querySelector('#drawingArea');
  if (drawingArea.hasChildNodes()) {
    while (drawingArea.firstChild) {
      drawingArea.removeChild(drawingArea.firstChild);
    }
  }

  const canvas = document.createElement('div');
  canvas.setAttribute('id', 'canvas');
  drawingArea.appendChild(canvas);

  for (let i = 1; i <= area; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
    console.log(`div ${i} created`);
  }

  canvas.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-auto-rows: 1fr`);

  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', () => {
      pixel.style.backgroundColor = 'black';
      console.log('event');
    })
  })
}

const button = document.querySelector('button#sizeSet');
button.addEventListener('click', createCanvas);