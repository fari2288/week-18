const button = document.querySelector('button')
button.addEventListener('click', sendComment)



document.addEventListener('DOMContentLoaded',
function(evnt){
    evnt.preventDefault();
    let name=localStorage.getItem('name')
    if (name!=null) {
        document.querySelector('#name').value=name;
    }}
)



function saveComment(author, comment) {
    let reg=/viagra|xxx/gmi;
    let container = document.querySelector('#container');

    container.innerHTML += `<span>${author}: </span><span>${comment.replace(reg, '***')}</span><br>`;
    document.querySelector('#comment').value='';
}

function sendComment() {
    let author = document.querySelector('#name').value;
    let comment = document.querySelector('#comment').value;
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author)
    }
    if (localStorage.getItem('comment') == null) {
        localStorage.setItem('comment', document.querySelector('#container').innerHTML);
    }
    saveComment(author, comment);
}