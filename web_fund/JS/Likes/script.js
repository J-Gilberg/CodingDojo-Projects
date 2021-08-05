// Variables
var numLikes = 0;

// Functions
function likeBtn(){
    var x = document.getElementById("numLikes");
    numLikes++;
    x.innerText = numLikes + " like(s)";
}
