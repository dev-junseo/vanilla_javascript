const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//업데이트가 가능하도록 let 으로 설정

function saveToDos(){
    //새로운 toDo 들만 포함하고 있는 array를 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify : array 형태 그대로 string 으로 변환
}

function deleteToDo(event){
    const li = event.target.parentElement;
    //target을 하게되면 어떤 버튼을 클릭했는지 알 수 있게 된다
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    //span : 줄바꿈이 되지않는 요소(삭제 버튼이랑 같은 줄에 나두기 위해)
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(info){
    info.preventDefault();
    const newTodo = toDoInput.value;
    //todoInput 초기화
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    //array에 newTodo 추가 / submit을 하면 빈 array를 추가하게 됨
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    //newTodo를 localStorage에 저장
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse : string을 array 형태로 다시 만든다
    //toDos에 전에있던 toDo 들을 복원
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

