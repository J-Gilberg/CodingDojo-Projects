var isCloudy = true;
var temperature= 65;
var isRaining = false;
var whatToBring = "I should bring: ";

if(isCloudy){
    whatToBring += "cloudglasses";
}

if(temperature > 60){
    whatToBring += "shorts, ";
}

if(isRaining){
    whatToBring +=  "umbrella, "
}

console.log(whatToBring);

//prepare for downcount!
for(var i = 10; i > 0; i--){
    if(i !== 2){
        console.log(i);
    }else{
        console.log("ignition!");
    }
}


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for(var i = 0; i<numbers.length;i++){
    if(numbers[i]>0){
        countPositives++
    }
}
console.log("there are " + countPositives + " positive values");
