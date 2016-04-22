console.log('1')

function getInput(id) {return document.getElementById(id);}

var todoString = getInput('newtodo');
var listDom = getInput('todolist');

function addTodo(event) {

    console.log('todoString input ing');

    if (event.keyCode !== 13 || todoString.value === "") { event.stopPropagation(); return; }

    var newtodo = todoString.value;
    
    todoString.value = "";

    console.log('새로운 todo:', newtodo);

    listDom.innerHTML += ' \
       <li>\
            <button class="delete">×</button>\
            <input type="checkbox" class="toggle-checked">\
            <span class="text"> '+ newtodo +' </span>\
        </li>';
    saveData();
}

function checkDelete(event) {
    if(event.target.className !== 'delete') {return;}
    var deleteBtn = event.target;

  //버튼의 상위엘리먼트 <li> 제거
    deleteBtn.parentElement.remove();
    saveData();

}

function loadData() {
    console.log('loadData()');
    return localStorage.getItem('todoHtml');
}

function saveData() {
    console.log('saveData()');
    localStorage.setItem('todoHtml', listDom.innerHTML);
}

listDom.addEventListener('click', checkDelete);
listDom.innerHTML = loadData();


