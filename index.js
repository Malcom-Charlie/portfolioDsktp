const actvtMdl = document.getElementById('hamburger-menu');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const extBtn = document.getElementById('exit-button');

actvtMdl.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.add('stop-scrolling');
  modal.classList.remove('display-none');
});

extBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.remove('stop-scrolling');
  modal.classList.add('display-none');
})