// document.getElementById("display") // how to call a specific ID.

// function hoverOver(element){ // how to change the source of an object
//     element.src = "img.."
    ////need to throw the html onmouseover for this to be complete.
    ////can you if statement to 
// }

function videoPreview(element){
    element.muted;
    if(element.paused){
        element.play()
    }else{
        element.pause()
    }
}