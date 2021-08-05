var numConsR = 3;
var countCon = 410;

function hide(id){
    if(id[2] == 1){
        document.getElementById("CR1").remove();
        numConsR--;
        document.getElementById("CR").innerText=numConsR;
    }else if(id[2] == 2){
        document.getElementById("CR2").remove();
        numConsR--;
        document.getElementById("CR").innerText=numConsR;
    }else{
        document.getElementById("CR3").remove();
        numConsR--;
        document.getElementById("CR").innerText=numConsR;
    }

    if(id[3] == "A"){
        countCon++;
        document.getElementById("countCon").innerText = countCon;
    }
    
}

function userNameChange(element){
    element.innerText = "Jordan";
}