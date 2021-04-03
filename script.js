const body = document.body;
const slide = document.querySelector('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
console.log(leftBtn);

let idx = 1;

rightBtn.addEventListener('click', (e) => {
  if (idx === 5) {
    idx = 5;
  } else {
    ++idx;
    body.style.backgroundImage = `url(./img/${idx}.jfif)`;
    slide.style.backgroundImage = `url(./img/${idx}.jfif)`;
  }
});

leftBtn.addEventListener('click', (e) => {
  if (idx === 1) {
    idx = 1;
  } else {
    idx--;
    body.style.backgroundImage = `url(./img/${idx}.jfif)`;
    slide.style.backgroundImage = `url(./img/${idx}.jfif)`;
  }
});
