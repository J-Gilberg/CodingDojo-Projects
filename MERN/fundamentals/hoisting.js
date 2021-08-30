// 1.
console.log("1.")
var hello;
console.log(hello); //prints undefined                               
var hello = 'world';

//2.
console.log("2.")
// var needle;
// test();
// var needle = 'magnet';
// console.log(needle);
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //prints magnet
}

//3.
console.log("3.")
// var brendan;
// var brendan = 'super cool';
//console.log(brendan); prints "super cool"
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); 

//4.
console.log("4.")
//var food:
//var food = 'chicken';
// console.log(food); prints chicken
//eat();
// food = 'half-chicken';
// console.log(food); prints half-chicken
// var food = 'gone';
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// 5.
console.log("5.")
//undefined - var mean is syntactally incorrect
console.log("error - var mean is syntactally incorrect")
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//.6
console.log("6.")
// var genre;
// console.log(genre); prints undefined
// genre = "disco";
// genre = "rock";
// console.log(genre); prints rock
// var genre = "r&b";
// console.log(genre); prints r&b
// console.log(genre); prints disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//7.
console.log("7.")
// var dojo;
// dojo = "san jose";
// console.log(dojo); prints san jose
//learn();
// dojo = "seattle"; 
// console.log(dojo); prints seattle
// var dojo = "burbank";
// console.log(dojo); prints burbank
// console.log(dojo); prints san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//8.
console.log("8.")
//console.log(makeDojo("Chicago", 65)); prints hiring: true, name: chicago
// console.log(makeDojo("Berkeley", 0)); error cant reassingn const
console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}