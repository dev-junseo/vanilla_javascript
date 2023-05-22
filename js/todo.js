const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(info){
    info.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
