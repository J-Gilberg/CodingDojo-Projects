// function narcissistic(value) {
//     sum = 0;
//     str = String(value);
//     for(let i = 0; i < str.length; ++i){
//         sum += Math.pow(str[i],str.length);
//     }
//     return sum == value;
// }
// console.log(narcissistic(153));


// function list(names) {
//     var output = ""
//     names.map((obj, i)=> {
//         if(names.length >=2 && i == names.length-1){
//             output += ` & ${obj.name}`;
//         }else if(i === 0){
//             output += `${obj.name}`;
//         }else{
//             output += `, ${obj.name}`;
//         }
//     });
//     return output;  
// }

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// // returns 'Bart, Lisa & Maggie'

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// // returns 'Bart & Lisa'

// console.log(list([{ name: 'Bart' }]));
// // returns 'Bart'

// console.log(list([]));
// // returns ''

// return masked string
// function maskify(cc) {
//     output =""
//     for(var i = 0; i < cc.length; ++i){
//         if(i < cc.length-4){
//             output += "#"
//         }else{
//             output += cc[i]
//         }
//     }
//     return output;
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify(     "64607935616"));
// console.log(maskify(               "1"));
// console.log(maskify(                ""));

// function createPhoneNumber(numbers){
//     var groups = ["","",""]
//     numbers.map((num,i) => {
//         if(i<3){
//             groups[0] += num;
//         }else if(i>=3 && i<6){
//             groups[1] += num;
//         }else{
//             groups[2] += num;
//         }
//     });
//     return  `(${groups[0]}) ${groups[1]}-${groups[2]}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// function isIsogram(str){
//     let characters = [];
//     let lowerStr = str.toLowerCase()
//     for(let i = 0; i < str.length ;++i){
//         if(characters.includes(lowerStr[i])){
//             return false;
//         }
//         characters.push(lowerStr[i]);
//     }
//     return true;
// }


// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("mo0se"));


// function solution(number){
//     sum = 0;
//     if(num < 0){
//         return sum;
//     }
//     for(var num = 0;num<number; ++num){
//         if(num%3 === 0 || num%5 === 0){
//             sum += num;
//         }
//     };
//     return sum;

// }

// console.log(solution(10));


function cakes(recipe, available) {
    let toMake = [];
    let recipeKeys = Object.keys(recipe);
    let availKeys = Object.keys(available);
    for(var = i; i < ;++irecipeKeys.map((key)=>{
        // console.log(key);
        // console.log(!availKeys.includes(key));
        if(!availKeys.includes(key)){
            return toMake.push(0);
        }
        return toMake.push(Math.floor(available[key]/recipe[key]));
    });
    console.log(toMake)
    return Math.min(...toMake);
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1},
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
    {sugar: 500, flour: 2000, milk: 2000}));

// function mix(s1, s2) {
//     s1Formated = s1.replace(/[&\/\\#,+()$~%. '":*?<>{}]/g, '').toUpperCase();
//     s2Formated = s2.replace(/[&\/\\#,+()$~%. '":*?<>{}]/g, '').toUpperCase();

// }


// one = "my&friend&Paul has heavy hats! &"
// two = "my friend John has many many friends &"
// mix(one, two)-- > "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// one = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// two = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(one, two)-- > "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// one = "Are the kids at home? aaaaa fffff"
// two = "Yes they are here! aaaaa fffff"
// mix(one, two)-- > "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"