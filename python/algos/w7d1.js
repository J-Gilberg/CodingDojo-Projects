// function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//         var name = names[index];
//         console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
// }

// actuallyPrintingNames()


var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);


magicalUnicorns();
var magicalUnicorns = function(){
    console.log("Will it blend?");
}
console.log("Don't breathe this!");