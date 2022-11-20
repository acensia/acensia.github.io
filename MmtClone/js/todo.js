const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

let todoArray = [];
const TODOs = "todos";

function saveTodo(){
    localStorage.setItem(TODOs, JSON.stringify(todoArray));
}

function todoBtnClicked(event){
    const parentLi = event.target.parentElement;
    const span = parentLi.querySelector("span");
    const context = span.innerText;

    alert(`Delete Todo:"${context}"`);
    parentLi.remove();
    todoArray = todoArray.filter((todo)=>{
        return todo.id !== parseInt(parentLi.id);
    });
    saveTodo();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.style.padding = "3px 5px";

    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(btn);
    btn.addEventListener("click", todoBtnClicked);
    span.innerText = newTodo.text;

    todoList.appendChild(li);
}

function todoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const todoContainer = {
        text:newTodo,
        id:Date.now()
    }

    todoArray.push(todoContainer);
    paintTodo(todoContainer);
    saveTodo();
}


const savedTodo = localStorage.getItem(TODOs);
if(savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todoArray = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
else {

}

todoForm.addEventListener("submit", todoSubmit);