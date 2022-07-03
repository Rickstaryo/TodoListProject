//#2  Uncaught TypeError: Cannot set properties of null (setting 'innerText')
// const hellos =document.getElementsByClassName("hello");
// console.log(hellos)
//  Show up the array.

//  How about if you want to get elements from inside of div?
// const title = document.getElementsByTagName("h1");
const title = document.querySelector(".hello h1");
//  querySelector always return the first one no the all the one 
//  if you want to solve that all the elements then use querySelectorAll
// const title1 = document.querySelectorAll(".hello h1:frist-child");

// Changing 
console.log(title);
title.innerText="Change the innerText";
// console.log(title1);
title.style.color="blue";


//  Wraping up 
// getElementById() 
// getElementsByClassName()
// getElementsByTagName()
// Three of them return the array, so you can't change the inside of text using a document object
// 이중에서 querySelector를 가장 많이 쓸 것임
//  But in the other way // Query selector


