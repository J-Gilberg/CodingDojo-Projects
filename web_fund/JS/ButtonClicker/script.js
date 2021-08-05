// Variables
var numLikes1 = 0;
var numLikes2 = 0;

// Functions
function loginBtn(element){
    if (element.innerText == "Login"){
            element.innerText = "Logout"
        }else{
            element.innerText = "Login"
        }
    return text;
}

function hide(element){
    element.remove();
}

function likeBtn1(element){
    numLikes1++;
    element.innerText = numLikes1 + "likes";
    // element.innerText =(parseInt(element.innerText.substring(0, element.innerText.indexOf(" "))) + 1) +" likes";
    
}

function likeBtn2(element){
    numLikes2++;
    element.innerText = numLikes2 + "likes";
    // element.innerText =(parseInt(element.innerText.substring(0, element.innerText.indexOf(" "))) + 1) +" likes";

}