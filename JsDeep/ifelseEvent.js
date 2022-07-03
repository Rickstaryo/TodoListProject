const h1= document. querySelector("div.hello:first-child h1")

function handleTitleClick(){
    let newColor;
    if(h1.style.color == "blue" ){
    newColor="tomato";
    }
    else{
    newColor="blue";
    }
    h1.style.color =newColor;
    
}
h1.addEventListener("click", handleTitleClick);