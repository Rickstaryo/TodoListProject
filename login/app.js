//1-1  Looking for the elements of HTML
// const loginForm = document.getElementById("login-form");
// 1-2. you need to search the form inside loginform.
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginFrom.querySelector("button");

// To make short above the code

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick(){
    // console.dir(loginInput);
    //  2-2 Which properties will change inside of input 
    console.log("hello",loginInput.value);
    // console.log("click!");
}

// 2-1 Need to listen the events
loginButton.addEventListener("click", handleLoginBtnClick); 


