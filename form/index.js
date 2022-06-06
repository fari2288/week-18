let errors = [];

const button=document.querySelector('#login');

button.addEventListener('click', checkAll);
// let emailField=document.querySelector('#email')

function checkValidity(input) {
    let validity = input.validity;


    if (validity.valueMissing) {
        errors.push('Поле ' + input.id + ' не заполнено');
    }
    if (validity.badInput) {
        errors.push('Плохой ввод');
    }
    if (validity.customError) {
    errors.push('Ошибка ввода');
}
    if (validity.patternMismatch) {
    errors.push('Неверный формат заполнения '
    +input.id);
    }
    if (validity.rangeOverflow) {
    let max = getAttributeValue(input, 'max');
    errors.push('Максимальное значение не может быть больше чем ' + max);
    }
    if (validity.rangeUnderflow) {
    let min = getAttributeValue(input, 'min');
    errors.push('Минимальное значение не может быть меньше чем ' + min);
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');


    for (let input of inputs) {
        checkValidity(input);
    }
    document.querySelector('.error').innerHTML = errors.join('. <br>');
    if (document.querySelector('.error').innerHTML==''){
const name=document.querySelector('#name').value;
document.querySelector('.error').innerHTML=`Добро пожаловать, ${name}!`
    }
}