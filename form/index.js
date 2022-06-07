let errors = [];

const button=document.querySelector('#login');

button.addEventListener('click', checkAll);

function checkValidity(input) {
    let validity = input.validity;


    if (validity.valueMissing) {
        errors.push('Поле ' + input.id + ' не заполнено');}

    if (validity.typeMismatch) {
    errors.push('Неверный формат заполнения '
    +input.id);
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