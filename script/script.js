let offset = 0; // смещение от левого края

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 100; // offwet+=256;
  if (offset > 100) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});

document.querySelector('.slider-back').addEventListener('click', function () {
  offset = offset - 100;
  if (offset < 0) {
    offset = 100;
  }
  sliderLine.style.left = -offset + '%';
});

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-button-img');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = 'img/elems/nav-close.svg';
  } else {
    navBtnImg.src = 'img/elems/nav-open.svg';
  }
};
