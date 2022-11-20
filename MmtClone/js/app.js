const loginDiv = document.getElementById("loginDiv");
const loginForm = document.getElementById("loginForm");
const greetingDiv = document.getElementById("greetingDiv");
const logoutBtn = greetingDiv.querySelector("button");
const todoDiv = document.getElementById("todoDiv");

greetingDiv.hidden = true;
todoDiv.hidden = true;

const USER_NAME = "username";

function toggleHidden(){
    loginDiv.hidden = !loginDiv.hidden;
    greetingDiv.hidden = !greetingDiv.hidden;
    todoDiv.hidden = !todoDiv.hidden;
}


function showGreeting(nick){
    toggleHidden();
    const greet = greetingDiv.querySelector("h1");
    greet.innerText = `Hi, ${nick}`;
};

function loginSubmit(event){
    event.preventDefault();
    alert("Welcome!");
    const input = loginForm.querySelector("input");
    const nick = input.value;
    input.value = "";
    localStorage.setItem(USER_NAME, nick);
    showGreeting(nick);
}

logoutBtn.addEventListener("click", (evnet)=>{
    alert("Bye bye T^T");
    localStorage.removeItem(USER_NAME);
    toggleHidden();
    loginForm.addEventListener("submit", loginSubmit);
});

//////////////////////////////////////////////////////////

const savedUsername = localStorage.getItem(USER_NAME);

if (savedUsername === null){
    loginForm.addEventListener("submit", loginSubmit);
}
else{
    
    showGreeting(savedUsername);
}
