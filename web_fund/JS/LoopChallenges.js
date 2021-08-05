//Variables
var i;
var sum = 0;
var product = 1;
var arr;
var ouputText = 0;

//1.Print odds 1-20
console.log("1.Print odds 1-20");

for(i = 1;i<=20;i++){
    if(i%2 !== 0){
        sum += i;
    }
}
console.log(sum);

//2.Decreasing Multiples of 3
console.log("2.Decreasing Multiples of 3");
for(i = 100; i>=1;i--){
    if(i%3===0){
        console.log(i);
    }
}

//3.Print the sequence
console.log("3.Print the sequence");
arr =[4, 2.5, 1, -0.5, -2, -3.5]
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//4.Sigma
sum = 0;
console.log("4.Sigma");
for(i=1;i<=100;i++){
    sum+=i
    if(i>1){
        ouputText += (" + "+i);
    }else{
        ouputText = i;
    }
}
console.log(ouputText);
console.log(sum);

//5.Factorial
console.log("5.Factorial");
for(i=1;i<=12;i++){

    product = (product * i);

    if(i>1){
        ouputText = ouputText + (" * "+i);
    }else{
        ouputText = i;
    }
}
console.log(ouputText);
console.log(product);