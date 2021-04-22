const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

let toDos = [];


function handleSubmitToDo(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function deleteToDo(event) {
    const btn = event.target;
    const li = event.target.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {

        return toDo.id !== parseInt(li.id);
    });


    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;

    span.innerText = text;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    li.id = newId;


    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDoList() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        console.log(parseToDos);
        parseToDos.forEach(function (todo) {
            paintToDo(todo.text);
        });


    }
}


function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmitToDo);
}

init();