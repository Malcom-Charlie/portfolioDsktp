const form = document.getElementById('contactForm');
const { email } = form.elements;

function validateEmail(str) {
  if (str.toLowerCase === str) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateEmail(email.value)) {
    form.submit();
  } else {
    const p = document.createElement('p');
    p.innerText = 'Please be sure the email is lower case';
    form.appendChild(p);
  }
});