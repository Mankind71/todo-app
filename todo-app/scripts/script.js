let input = document.getElementById('userinput');
let enter = document.getElementById('enter');
let ul = document.querySelector('ul');
let clear = document.getElementById('clear');

if(localStorage.getItem('todos') == undefined){
    var todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
}

todosEx = localStorage.getItem('todos');
todos = JSON.parse(todosEx);
// todos.forEach(input => {
//     createListElement();
// });

function createListElement() {

    let div = document.createElement('div');
    div.classList.add('div');
    div.setAttribute('id', input.value);

    const afterClick = () => {
        if(checkbox.checked == true){
            inp.classList.add('done');
        }
        else if(checkbox.checked == false){
            inp.classList.remove('done');
        }
    }

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'ckClass';
    checkbox.addEventListener('click', afterClick);

    let inp = document.createElement('input');
    inp.setAttribute('class', 'inp');
    inp.setAttribute('type', 'text');
    inp.disabled = true;
    inp.value = input.value;
    z = input.value;
    console.log(z);
    // inp.appendChild(document.createTextNode(input.value));    
    x = todos.indexOf(inp.value);
    console.log(x);
    inp.addEventListener('keypress', function(){
        if(inp.value.length > 0 && event.keyCode === 13){
            inp.value = inp.value;
            todos[x] = inp.value;
            localStorage.setItem('todos', JSON.stringify(todos));
            inp.disabled = true;
            inp.style.background = 'transparent';
        }
    })
    
    
    let edit = document.createElement('button');
    edit.innerHTML = 'Edit';
    edit.classList.add('btn', 'btn-info', 'edit');
    edit.addEventListener('click', function(){
        inp.disabled =  false;
        inp.style.background = 'lightblue';
    })

    let del = document.createElement('button');
    del.innerHTML = 'Delete';
    del.classList.add('del', 'btn', 'btn-danger');
    del.onclick = function (){
        ul.removeChild(div);
        // let index = todos.indexof();
        todos.splice(x, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    ul.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(inp);
    div.appendChild(edit);
    div.appendChild(del);

    if (input.value != ''){
        todos.push(input.value);
        localStorage.setItem('todos', JSON.stringify(todos));
    } 
    input.value = '';
}

const addAfterClick = () => {
    if(input.value.length > 0){
        input.style.background = 'transparent';
        createListElement();
    }
}
const addAfterKeypress = () => {
    if((input.value.length > 0) && event.keyCode == 13){
        createListElement(); 
        input.style.background = 'transparent';
    }
}
const coolor = function(){
    if(true){
        input.style.background = 'lightblue';
    }
}
const clearAfterClick = () => {
    localStorage.clear();
    todos = [];
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}

input.addEventListener('keypress', coolor);
enter.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterKeypress);
clear.addEventListener('click', clearAfterClick);

// esc button event...

