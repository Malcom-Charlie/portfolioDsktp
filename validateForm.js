const form = document.getElementById('contactForm');
const emailErrMsg = document.getElementById('email-message');
const emailCapitalChk = /[A-Z]/;

form.addEventListener('submit', (event) => {
  const email = document.querySelector('#email').value;
  if (emailCapitalChk.test(email)) {
    event.preventDefault();
    emailErrMsg.innerHTML += `*Please ensure email field has lower case characters. Try this instead: <strong>${email.toLowerCase()}</strong>*`;
    emailErrMsg.classList.remove('hide');
  }
});