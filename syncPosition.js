const moveFace = (x) => {
  const brows = document.getElementsByClassName('brow');
  const mouth = document.getElementsByClassName('mouth')[0];

  const rotateDeg = x / 300 * 45;
  const translateX = x / 300 * 30;
  brows[0].style.transform = 'translateX(' + translateX + '%)';
  brows[1].style.transform = 'translateX(' + translateX + '%)';
  mouth.style.transform = 'rotate(' + rotateDeg + 'deg)';
};

document.addEventListener('DOMContentLoaded', () => {
  const position = document.getElementsByClassName('slidebar')[0];
  position.addEventListener('input', (evt) => {
    const width = window.screen.width;
    const x = -evt.target.value;
    moveFace(x);
  })
})
