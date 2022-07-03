const h1= document. querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if( currentColor== "blue" ){
    newColor="tomato";
    }
    else{
    newColor="blue";
    }
    h1.style.color =newColor;
    
}
h1.addEventListener("click", handleTitleClick);

//  Wrapping up 
//  Step.1 search the elements of thing
//  Step.2 event listening 
//  step.3 react that events