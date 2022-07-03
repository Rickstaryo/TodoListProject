const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//If you put hello , eventhough there is no value inside of the button the console still keep print out  and  add hello
//  so in this section I will know how to solve this problem  



function handleLoginBtnClick(){
    const userName =loginInput.value;
    if(userName ===""){
        alert("Please write your name");
    }else if (userName.length> 15){
        alert("your name is too long");
    }

}

loginButton.addEventListener("click", handleLoginBtnClick); 