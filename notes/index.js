const button = document.querySelector('#button');
button.addEventListener('click', addNotes);


function addNotes() {
    let name=document.querySelector('#name').value;
    let note = document.querySelector('#note').value;
    let error=document.querySelector('#error');
    
document.querySelector('#error').innerHTML='';

if (name!=='' && note!=='' ){
container.innerHTML+=name+'<br>'+note+'<br>';
localStorage.setItem('name', container.innerHTML);
}
    else
    (error.innerHTML+='Добавьте заметку'
    )
    document.querySelector('#name').value = "";
    document.querySelector('#note').value = "";
}

let saveNoted=localStorage.getItem('name');
document.querySelector('#container').innerHTML+=saveNoted;

const button_reset=document.querySelector('#reset');
button_reset.addEventListener('click', reset)
function reset(){
    container.innerHTML="";
    localStorage.clear();
}