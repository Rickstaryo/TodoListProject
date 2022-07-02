//  Conditional Statment 
// const age =parseInt(prompt("How old are you"));
// Prompt get two thing default message and function
// because when you using the prompt it freez out the html,Css and javascript 
//  IT is very old fashion wya so using in other way

// one type to other number 

// console.log(isNaN(age));
// if(isNaN(age)){
//     console.log("please write a number")
// }
// else{
//     console.log("Thank you for writing your age")
// }

//  HW
//  To build up the age checker

const age1 = parseInt(prompt("How old are you?"));

//  Frist of all , check the User put the number in the prompt
if(!isNaN(age1)) {
    if(age1>18){
        console.log("You can drink liquor")
    }
    else{
        console.log("Warning you are not allowed to drink iquor")
    }
}
else{
    console.log("please right the number ");
}
