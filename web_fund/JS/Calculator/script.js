
var valOne = 0;
var valTwo = 0;
var symbol = "";
var symbolPressed = 0;
function press(input){
    if(symbolPressed === 0){
        if(document.getElementById("display").innerText !== "0"){
            document.getElementById("display").innerText += input;
        }else{
            document.getElementById("display").innerText = input;
        }
    }else{
        document.getElementById("display").innerText = input;
        symbolPressed = 0;
    }
}

function setOP(input){
    valOne = parseFloat(document.getElementById("display").innerText,10);
    symbol = input;
    console.log(input);
    console.log(symbol);
    symbolPressed = 1;
}

function calculate(){
    valTwo = parseFloat(document.getElementById("display").innerText,10);
    if(symbol == "/"){
        console.log("divide");
        document.getElementById("display").innerText = valOne/valTwo;
    }
    if(symbol == "*"){
        console.log("times");
        document.getElementById("display").innerText = valOne*valTwo;
    }
    if(symbol == "-"){
        console.log("minus");
        document.getElementById("display").innerText = valOne-valTwo;
    }
    if(symbol == "+"){
        console.log("plus");
        document.getElementById("display").innerText = valOne+valTwo;
    }
}

function clr(){
    valOne = 0;
    valTwo = 0;
    symbol = "";
    symbolPressed = 0;
    document.getElementById("display").innerText = "0";
}