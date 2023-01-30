const actvtMdl = document.getElementById('hamburger-menu');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const extBtn = document.getElementById('exit-button');
const mdlLks = document.querySelectorAll('.modal__navigation__li');

actvtMdl.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.add('stop-scrolling');
  modal.classList.remove('display-none');
});

extBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.remove('stop-scrolling');
  modal.classList.add('display-none');
});

for (let i = 0; i < mdlLks.length; i += 1) {
  mdlLks[i].addEventListener('click', (event) => {
    event.stopPropagation();
    body.classList.remove('stop-scrolling');
    modal.classList.add('display-none');
  });
}