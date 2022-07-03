// Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

// For example, if the user clicks a button on a webpage, you might want to react to that action by displaying an information box. In this article, we discuss some important concepts surrounding events, and look at how they work in browsers. This won't be an exhaustive study; just what you need to know at this stage.


//  All the events can 'listen' by javascript 
const title= document. querySelector("div.hello:first-child h1")

function handleTitleClick(){
    console.log("title was clicked!")
}

title.addEventListener("click",handleTitleClick);