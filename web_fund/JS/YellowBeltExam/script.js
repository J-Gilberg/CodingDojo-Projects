function cart(){
    alert("Your Cart is empty!");
}

document.getElementById("mainImg").addEventListener("mouseover", mOver);
document.getElementById("mainImg").addEventListener("mouseout", mOut);

function mOver(){
    document.getElementById("mainImg").src = "img/assets/succulents-2.jpg" 
}

function mOut(){
    document.getElementById("mainImg").src = "img/assets/succulents-1.jpg"
}

function accept(){
    document.getElementById("alertbar").style.display = "none"
}

