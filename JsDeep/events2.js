const title= document. querySelector("div.hello:first-child h1")
console.dir(title);


function handleMouseEnter(){
    // console.log("mouse is here");
title.innerText = " mouse is here"
}
function handleMouseleave(){
title.innerText = "Mouse leave"
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
    //only work for Document of body, head, title can use 
    // like div cannot be used .
}
function coppier(){
 alert("copier");
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseleave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", coppier)

// another way to show up 
// title.onclick("click",handleTitleClick);

//  Search the elements by dir() ,this function will show up what kind of properties are inside.
//  line 14 I can use both of way to express the eventsListener but if you use the addEventsListener then you can use the RemoceEventListener.