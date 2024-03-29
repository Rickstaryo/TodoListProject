const toDoForm =document.getElementById("todo-form");
const toDoInput= document.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";
let toDos =[];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
  
    toDos = toDos.filter(toDo=> toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li  = document.createElement("li");
    li.id= newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    const button = document. createElement("button");
    button.innerText="❌"
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleTodoList(event){
    event.preventDefault();
    const newTodo= toDoInput.value;
    toDoInput.value="";
    const newTodoObj={
        id: Date.now(),
        text: newTodo
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleTodoList);

function sayHello(item){
    console.log("Hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}