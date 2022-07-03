const title= document. querySelector("div.hello:first-child h1")
console.dir(title);


function handleMouseEnter(){
    // console.log("mouse is here");
title.innerText = " mouse is here"
}
function handleMouseleave(){
title.innerText = "Mouse leave"
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);

//  Search the elements by dir() this function will show up what kind of properties are inside.