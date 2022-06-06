const button=document.querySelector('button');
button.addEventListener('click', sendComment);

document.addEventListener('DOMContentLoaded', function(evnt){
    let name=localStorage.getItem('name');
if (name!=null){
    document.querySelector('#name').value=name;
}
})


function sendComment() {
    let author=document.querySelector('#name').value;
let comment=document.querySelector('#comment').value;
if (localStorage.getItem('name')==null){
    localStorage.setItem('name', author)
};
if (localStorage.getItem('comment')==null){
    localStorage.setItem('comment', document.querySelector('#container').innerHTML)
};
document.querySelector('#comment').value='';
saveComment(author, comment);
}

function saveComment(author, comment) {
let container=document.querySelector('#container');
let reg=/viagra|xxx/gmi;
container.innerHTML+=`<span>${author}</span><br><span>${comment.replace(reg, '***')}</span><br>`
}