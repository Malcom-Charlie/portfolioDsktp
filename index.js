const actvtMdl = document.getElementById('hamburger-menu');
const dctvtMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const extBtn = document.getElementById('exit-button');
const mdlLks = document.querySelectorAll('.modal__navigation__li');

actvtMdl.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.add('stop-scrolling');
  modal.classList.remove('display-none');
  dctvtMenu.classList.add('display-none');
});

extBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.remove('stop-scrolling');
  modal.classList.add('display-none');
  dctvtMenu.classList.remove('display-none');
});

for (let i = 0; i < mdlLks.length; i += 1) {
  mdlLks[i].addEventListener('click', (event) => {
    event.stopPropagation();
    body.classList.remove('stop-scrolling');
    modal.classList.add('display-none');
    dctvtMenu.classList.remove('display-none');
  });
}

// Portfolio Section
import data from './portfoliodata.js';
const workSectn = document.getElementById('portfolio');

// To iterate elements in portfolio data
for (let i = 0; < data.length ; i++ ) {
  const portDiv = document.createElement('div');
  portDiv.classList.add('port1');
  const portImg = document.createElement('img');
  const rghtDiv = document.createElement('div');
  const portTtl1 = document.createElement('h2');
  portTtl1.classList.add('title');
  const deetsDiv = document.createElement('div');
  const span1 = document.createElement('span');
  span1.classList.add('clnt');
  const span2 = document.createElement('span');
  span2.classList.add('deets');
  const bullet = document.createElement('img');
  bullet.classList.add('crcl');
  const span3 = document.createElement('span');
}

