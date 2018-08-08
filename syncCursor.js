const clip = (mini, maxi, val) => Math.min(maxi, Math.max(mini, val));

const moveFace = (x) => {
  const brows = document.getElementsByClassName('brow');
  const mouth = document.getElementsByClassName('mouth')[0];

  const rotateDeg = x / 300 * 45;
  const translateX = x / 300 * 45;
  brows[0].style.transform = 'translateX(' + translateX + 'px)';
  brows[1].style.transform = 'translateX(' + translateX + 'px)';
  mouth.style.transform = 'rotate(' + rotateDeg + 'deg)';
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (evt) => {
    const width = window.screen.width;
    const x = clip(-300, 300, evt.clientX - width / 2);
    console.log({x, val: evt.clientX - width / 2});
    moveFace(x);
  })
})
