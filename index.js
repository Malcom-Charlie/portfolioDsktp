import data from './portfoliodata.js';

const actvtMdl = document.getElementById('hamburger-menu');
const dctvtMenu = document.querySelector('.hamburger');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const extBtn = document.getElementById('exit-button');
const mdlLks = document.querySelectorAll('.modal__navigation__li');

actvtMdl.addEventListener('click', (event) => {
  event.stopPropagation();
  // body.classList.add('stop-scrolling');
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
const workSectn = document.getElementById('portfolio');
// function creates project details
function projectDetails(obj) {
  const blur = document.getElementById('blur');
  blur.classList.add('blur');
  body.classList.add('stop-scrolling');
  const container = document.getElementById('project-details');
  container.classList.remove('display-none');
  // Create Modal elements
  const h2 = document.createElement('h2');
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('project-detail__header');
  const exitButton = document.createElement('i');
  exitButton.classList.add('material-icons');
  exitButton.setAttribute('id', 'detail-exit');
  exitButton.addEventListener('click', () => {
    blur.classList.remove('blur');
    body.classList.remove('stop-scrolling');
    container.classList.add('display-none');
    container.innerHTML = '';
  });
  const tagsDiv = document.createElement('div');
  tagsDiv.classList.add('project-detail__tags');
  const tag1 = document.createElement('p');
  const bullet1 = document.createElement('img');
  bullet1.classList.add('project-detail__bullet');
  const tag2 = document.createElement('span');
  const bullet2 = document.createElement('img');
  bullet2.classList.add('project-detail__bullet');
  const tag3 = document.createElement('span');
  const mainImg = document.createElement('img');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('project-detail__imgDiv');
  const description = document.createElement('p');
  description.classList.add('project-detail__description');
  const techDiv = document.createElement('ul');
  techDiv.classList.add('project-detail__technologies');
  const textDiv = document.createElement('div');
  textDiv.classList.add('project-detail__textDiv');
  const leftDiv = document.createElement('div');
  const rigthDiv = document.createElement('div');
  const line = document.createElement('hr');
  line.classList.add('project-detail__line');
  for (let i = 0; i < obj.technologies.length; i += 1) {
    const li = document.createElement('li');
    li.innerText = obj.technologies[i];
    li.classList.add('technologies__li');
    techDiv.appendChild(li);
  }
  const buttonsDiv = document.createElement('div');
  const button1 = document.createElement('button');
  const btnImg1 = document.createElement('img');
  const btnImg2 = document.createElement('img');
  const button2 = document.createElement('button');
  // Add content
  const { tags } = obj;
  const [tagA, tagB, tagC] = tags;
  h2.innerText = obj.title;
  exitButton.innerText = 'close';
  tag1.innerText = tagA;
  tag2.innerText = tagB;
  tag3.innerText = tagC;
  bullet1.src = './images/circleicn.png';
  bullet2.src = './images/circleicn.png';
  mainImg.src = obj.image;
  description.innerText = obj.description;
  btnImg1.src = './images/see-live.svg';
  btnImg2.src = './images/github-in-button.svg';
  button1.classList.add('project-detail__button');
  button2.classList.add('project-detail__button');
  // Append
  container.append(modalHeader, tagsDiv, imgDiv, textDiv);
  imgDiv.appendChild(mainImg);
  textDiv.append(leftDiv, rigthDiv);
  leftDiv.appendChild(description);
  rigthDiv.append(techDiv, line, buttonsDiv);
  modalHeader.append(h2, exitButton);
  tagsDiv.append(tag1, bullet1, tag2, bullet2, tag3);
  buttonsDiv.append(button1, button2);
  buttonsDiv.classList.add('project-detail__buttons');
  button1.innerText = 'See live';
  button1.appendChild(btnImg1);
  button2.innerText = 'See source';
  button2.appendChild(btnImg2);
}

// To iterate elements in portfolio data
for (let i = 0; i < data.length; i += 1) {
  // Creating elements
  const portDiv = document.createElement('div');
  portDiv.classList.add('port1');
  const portImg = document.createElement('img');
  portImg.classList.add('port1__img');
  const rghtDiv = document.createElement('div');
  rghtDiv.classList.add('imhere');
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
  tchnlgs.classList.add('tags');
  // Technologies for loop
  for (let j = 0; j < data[i].technologies[j]; j += 1) {
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
  const { tags } = data[i];
  const [tagA, tagB, tagC] = tags;
  portImg.src = data[i].image;
  portImg.alt = `${data[i].title} img`;
  portTtl1.innerText = data[i].title;
  span1.innerText = tagA;
  span2.innerText = tagB;
  span3.innerText = tagC;
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
  rghtDiv.append(description, btnDiv);
  rghtDiv.appendChild(tchnlgs);
  // portDiv.appendChild(btnDiv);
  btnDiv.appendChild(btn);
  btnTxt.innerText = 'See Project';
  btn.appendChild(btnTxt);
  btn.addEventListener('click', () => {
    projectDetails(data[i]);
  });
}