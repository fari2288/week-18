const button = document.querySelector('button');
button.addEventListener('click', checkMessage);

document.addEventListener('DOMContentLoaded', function (evnt) {
    evnt.preventDefault();
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelector('#author').value = name;
    }
});

function sendMessage(author, comment) {
    let result = document.querySelector('#result');
    const reg = /viagra|XXX/gim;
    result.innerHTML += `<div id="img1" style='background-image: url(https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg); background-size: cover;'></div><span>${author}: </span><span>${comment.replace(reg, '***')}</span>`;
    document.querySelector('#comment').value = '';
}

function checkMessage() {
    let author = document.querySelector('#author').value;
    let comment = document.querySelector('#comment').value;
    comment.value = '';
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', result.innerHTML);
    }
    sendMessage(author, comment);
}