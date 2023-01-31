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
for (let i = 0; i < data.length; i++) {
  //Creating elements
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
  const bullet2 = document.createElement('img');
  bullet.classList.add('crcl');
  bullet2.classList.add('crcl');
  const span3 = document.createElement('span');
  const description = document.createElement('p');
  const tchnlgs = document.createElement('ul');
  tchnlgs.classList.add('tags')
  // Technologies for loop 
  for (let j = 0; j < data[i].technologies[j]; j++) {
    const li = document.createElement('li');
    li.classList.add('tgs');
    li.innerText = data[i].tags[j];
    tchnlgs.appendChild(li);
  }
  const btnDiv = document.createElement('div');
  const btn = document.createElement('button');
  btn.classList.add('prjctbtn');
  const btnTxt = document.createElement('span');
  btnTxt.classList.add('btntxt');
  // Adding content
  portImg.src = data[i].image;
  portImg.alt = data[i].title + ' img';
  portTtl1.innerText = data[i].title;
  span1.innerText = data[i].tags[0];
  span2.innerText = data[i].tags[1];
  span3.innerText = data[i].tags[2];
  bullet.src = 'images/circleicn.png';
  bullet2.src = 'images/circleicn.png';
  description.innerText = data[i].description;
  // Append 
  workSectn.appendChild(portDiv);
  portDiv.appendChild(portImg);
  portDiv.appendChild(rghtDiv);
  rghtDiv.appendChild(portTtl1);
  rghtDiv.appendChild(deetsDiv);
  deetsDiv.appendChild(span1);
  deetsDiv.appendChild(bullet);
  deetsDiv.appendChild(span2);
  deetsDiv.appendChild(bullet2);
  deetsDiv.appendChild(span3);
  rghtDiv.appendChild(description);
  rghtDiv.appendChild(tchnlgs);
  portDiv.appendChild(btnDiv);
  btnDiv.appendChild(btn);
  btnTxt.innerText = 'See Project'
  btn.appendChild(btnTxt);
}
  
