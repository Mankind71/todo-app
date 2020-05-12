let input = document.getElementById('userinput');
let enter = document.getElementById('enter');
let ul = document.querySelector('ul');
let clear = document.getElementById('clear');
var y;


// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));
// function check (i) {
//     let checked = document.getElementsByName(i)[0].getAttribute('name');
//     return checked
//     checked.addEventListener('click',function(){
//         let ck = document.getElementById(name);
//         ck.setAttribute('class', 'done');
//     })
// }

function createListElement() {
    let div = document.createElement('div');
    div.classList.add('div');

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'ckClass'
    checkbox.onclick = function(){
        if(checkbox.checked == true){
            inp.classList.add('done');
        }
        else if(checkbox.checked == false){
            inp.classList.remove('done');
        }
    }

    let inp = document.createElement('input');
    inp.disabled = true;
    y = input.value;
    inp.value = input.value;
    inp.setAttribute('name', input.value);
    inp.setAttribute('class', 'inp');
    inp.setAttribute('type', 'text');
    inp.style.display = 'inline';
    // inp.appendChild(document.createTextNode(input.value));

    let edit = document.createElement('button');
    // edit.setAttribute('name', input.value);
    edit.id = y;
    edit.innerHTML = 'Edit';
    edit.classList.add('btn', 'btn-info', 'edit');
    // edit.addEventListener('click', function(event){
    edit.onclick = function (){
        inp.disabled =  false;
        let text = document.getElementsByName(y)[0];
        if(event.keyCode === 13){
            alert('hello');
            // inp.disabled = true;
        }
    }

    let del = document.createElement('button');
    // del.setAttribute('name', input.value);
    del.innerHTML = 'Delete';
    del.classList.add('del', 'btn', 'btn-danger');
    del.onclick = function (event){
        ul.removeChild(div);
    }

    // itemsArray.push(input.value);
    // localStorage.setItem('items', JSON.stringify(itemsArray));

    ul.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(inp);
    div.appendChild(edit);
    div.appendChild(del);
    input.value = '';   
}

// data.forEach(item => {
//     createListElement(item);    
// });
function addAfterClick(){
    if(input.value.length > 0){
        createListElement();
    }
}
function addAfterKeypress(){
    if((input.value.length > 0) && event.keyCode == 13){
        createListElement(); 
    }
}
function clearAfterClick(){
    localStorage.clear();
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}
//     input
//     let x = document.getElementsByName(i)[0].getAttribute('name)'; 
//     document.getElementById(x).setAttribute('class', 'done');
// })

enter.addEventListener('click', addAfterClick);
input.addEventListener('keypress', addAfterKeypress);
clear.addEventListener('click', clearAfterClick);