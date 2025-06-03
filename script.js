
// マウスに合わせて表示
document.addEventListener('mousemove', (e) => {
  const petal = document.createElement('div');
  petal.textContent = '🌸';
  petal.style.position = 'absolute';
  petal.style.left = `${e.pageX}px`;
  petal.style.top = `${e.pageY}px`;
  petal.style.pointerEvents = 'none';
  petal.style.fontSize = '20px';
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 1000);
});
