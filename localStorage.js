const formData = {};
const nameInput = document.getElementById('full-name');

function storeOnLocalStorage (obj) {
    const string = JSON.stringify(obj);
    localStorage.setItem('contactData', string);
}

nameInput.addEventListener('change', (event) => {
    formData.name = event.target.value;
    storeOnLocalStorage(formData);
})
const emailInput = document.getElementById('email');
emailInput.addEventListener('change', (event) => {
    formData.email = event.target.value;
    storeOnLocalStorage(formData);
})
const messageInput = document.getElementById('contactTextArea');
messageInput.addEventListener('change', (event) => {
    formData.message = event.target.value;
    storeOnLocalStorage(formData);
})


function getFromLocalStorage(string) {
    const code = JSON.parse(localStorage.getItem(string));
    return code;
}

if (getFromLocalStorage('contactData') != null) {
    nameInput.value = getFromLocalStorage('contactData').name
}
