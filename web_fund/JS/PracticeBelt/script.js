var cartCount = 0;
var bannerSelection = 2;
var imgs = ["img/stonepunk.png","img/cafe-neko.png","img/stonepunk.png","img/pixel-ninjas-2.png"];

function addToCart(){
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

function linuxAlert(){
    alert("This game is supported on Linux");
}

function changeBanner(elementId){
    if(elementId == "arrowRight"){
        if(bannerSelection < 4){
            bannerSelection++;
        } else{
            bannerSelection = 1;
        }
    }else{
        if(bannerSelection > 1){
            bannerSelection--;
        } else{
            bannerSelection = 4;
        }    
    }
    document.getElementById("scrollBanner").src = imgs[bannerSelection -1];
    for(var i = 1; i <= 4; i++){
        if(i == bannerSelection){
            document.getElementById("BS"+bannerSelection).style.backgroundColor = "blueviolet";
        }else{
            document.getElementById("BS"+i).style.backgroundColor = "darkgrey";
        }
    }   
}

// function changeBannerLeft(){
//     if(bannerSelection > 1){
//         bannerSelection--;
//     } else{
//         bannerSelection = 4;
//     }

//     document.getElementById("scrollBanner").src = imgs[bannerSelection - 1];

//     for(var i = 1; i <= 4; i++){
//         if(i == bannerSelection){
//             document.getElementById("BS"+bannerSelection).style.backgroundColor = "blueviolet";
//         }else{
//             document.getElementById("BS"+i).style.backgroundColor = "darkgrey";
//         }
//     }   
// }