const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function onLogoutClick(event) {
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    logoutButton.classList.add(HIDDEN_CLASSNAME);
    paintLoginForm();
}

function paintLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.addEventListener("click", onLogoutClick);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
paintLoginForm();
} else {
paintGreetings(savedUsername);
}