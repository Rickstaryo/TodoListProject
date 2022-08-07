'use Strict';

console.log("1");
setTimeout(function(){
console.log(2)}
, 1000);

console.log('3');

// Sunchronous callbcak

function printImmediatly(print){
    print() 
}
printImmediatly(() => console.log('hello'));

// Asynchronous 
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('Ascunchronous'));
