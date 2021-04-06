let btn = document.getElementById('changeBackground');
let colors = ['red', 'green', 'purple', 'blue', 'grey'];

btn.addEventListener('click', (e) => {
  let randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
})