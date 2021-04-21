const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";


function handleSubmitToDo(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    span.innerText = text;
    delBtn.innerText = "❌";

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}


function loadToDoList() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos === null) {

    }
}


function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmitToDo);
}

init();