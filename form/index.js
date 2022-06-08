let errors = [];
const button = document.querySelector('#login');
button.addEventListener('click', checkAll);

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Enter ' + input.id);
    }
    if (validity.typeMismatch) {
        errors.push('Invalid format of ' + input.id);
    }
    if (validity.patternMismatch) {
        errors.push('Please choose a stronger password. Try a mix of letters, numbers, and symbols.');
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    document.querySelector('.error').innerHTML = errors.join('. <br>');
    if (document.querySelector('.error').innerHTML == '') {
        const name = document.querySelector('#name').value;
        document.querySelector('.error').innerHTML = `Welcome, ${name}!`
    }
}