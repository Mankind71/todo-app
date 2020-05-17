let input = document.getElementById('userinput');
let enter = document.getElementById('enter');
let ul = document.querySelector('ul');
let clear = document.getElementById('clear');

const createDiv = () => {
    let div = document.createElement('div');
    div.classList.add('div');
    return div;
}
const createCkBox = () => {
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'ckClass';
    checkbox.addEventListener('click', ckAfterClick);
}
const ckAfterClick = () => {
    if(checkbox.checked == true){
        inp.classList.add('done');
    }
    else if(checkbox.checked == false){
        inp.classList.remove('done');
    }
}
const createInput = () =>{
    let inp = document.createElement('input');
    inp.disabled = true;
    inp.value = input.value;
    inp.setAttribute('name', input.value);
    inp.setAttribute('class', 'inp');
    inp.setAttribute('type', 'text');
    inp.onkeypress = function(){
        if(inp.value.length > 0 && event.keyCode === 13){
            inp.disabled = true;
        }
    }
}
const createEdit = () =>{
    let edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.classList.add('btn', 'btn-info', 'edit');
    // edit.onclick = function (){
    edit.addEventListener('click', function(){
        inp.disabled =  false;
        inp.style.background = 'lightblue';
    }
}
const createDel = () =>{
    let del = document.createElement('button');
    del.innerHTML = 'Delete';
    del.classList.add('del', 'btn', 'btn-danger');
    del.onclick = function (){
        ul.removeChild(div);
    }
}

function createListElement(ul, div, checkbox, inp, edit, del) {  

    ul.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(inp);
    div.appendChild(edit);
    div.appendChild(del);
    input.value = '';   
}

const addAfterClick = () => {
    if(input.value.length > 0){
        createListElement();
    }
}
const addAfterKeypress = () => {
    if((input.value.length > 0) && event.keyCode == 13){
        createListElement(); 
    }
}
const clearAfterClick = () => {
    localStorage.clear();
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}

enter.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterKeypress);
clear.addEventListener('click', clearAfterClick);