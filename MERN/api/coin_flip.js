function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync(num) {
    let headsCount = 0;
    let attempts = 0;
    while(attempts < num) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        if(headsCount == 5){
            return attempts;
        }
    }
    return 0;
}

function fiveHeads(){
    return new Promise( (resolve, reject) => {
        var num = 50;
        var result = fiveHeadsSync(num);
        if(result > 0){
            resolve(`it took ${result} number of attempts to get 5 heads in a row.`);
        }else{
            reject(`number of flips hit ${num} before heads was flipped 5 times in a row.`);
        }
    });
}

fiveHeads()
    .then( response => console.log(response))
    .catch( error => console.log(error));
